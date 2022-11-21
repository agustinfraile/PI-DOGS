const { Router } = require('express');
const { getAllDogs } = require('../controllers');
const { Dog, Temperament } = require('../db');
const router = Router();


router.get('/dogs', async (req, res) => {
    const { name } = req.query;
    const allDogs = await getAllDogs();
    try {
        if(name){
            const dogFilteredName = allDogs.filter(dog => 
                dog.name.toLowerCase().includes(name.toLowerCase())
            )
            dogFilteredName.length 
            ? res.status(200).json(dogFilteredName)
            : res.status(404).json('No se encontraron dogs con ese nombre')
        } else {
            res.status(200).json(allDogs);
        }
    } catch (error) {
        res.status(500).json('No se pudo traer a los dogs');
    }
});

router.get('/dogs/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs();
    
    try {
        let dogFilteredId = allDogs.filter(dog => dog.id == idRaza);
        if(dogFilteredId.length) {
            return res.status(200).json(dogFilteredId) ;
        } else {
            return res.status(404).json('No hay dogs con ese id');
        }
    } catch (error) {
        res.status(500).json('No se pudo traer al dog por id');
    }
});

router.get('/temperaments', async (req, res) => {
    const allData = await getAllDogs();
    try {
        let allTemperaments = allData.map(dog => dog.temperament);
        let temperaments = allTemperaments.join().split(',').map(temp => temp.trim());
        temperaments.map(temperament => {
            Temperament.findOrCreate({
                where: {
                    name: temperament, 
                },
            });
        });

        const allTemp = await Temperament.findAll()
        res.status(200).json(allTemp);

    } catch (error) {
        res.status(500).json('No se pudo traer ningun temperamento');
    }

});

router.post('/dogs', async (req, res) => {
    const {
        name,
        image,
        temperament,
        weight,
        life_span,
        height
    } = req.body;

    if ( !name, !temperament, !weight, !height) {
        return res.status(404).json('Faltan datos importantes');
    };

    try {

        let newDog = await Dog.create({
            name,
            image,
            weight,
            height,
            life_span
        });

        let tempDB = await Temperament.findAll({
            where: { name: temperament },
        });
        
        newDog.addTemperaments(tempDB);

        res.status(200).json(newDog);

    } catch (error) {
        res.status(404).json({error: 'No se pudo crear el dog'});
    }
});

module.exports = router;
