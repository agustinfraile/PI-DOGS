const axios = require('axios');
const { Dog, Temperament } = require('../db');

const getDogsAPI = async () => {
    const dogsAPI = await axios.get('https://api.thedogapi.com/v1/breeds');

    
    let dogs = dogsAPI.data.map(dog => {
        return {
            name: dog.name,
            image: dog.image.url,
            temperament: [dog.temperament].join().split(',').map(temp => temp.trim()),
            weight: dog.weight.metric,
            height: dog.height.metric,
            life_span: dog.life_span,
            id: dog.id
        }
    })
  
  return dogs;
  
}

const getDogsDB = async () => {
    const gameDB = await Dog.findAll ({
        include: {
            model: Temperament,
            attributes: ['name'],
            throught: {attributes: []}
        },
    });

    if(gameDB) {
        return gameDB;
    } else {
        let error = new Error('No se pudo traer los dogs de la base de datos');
        throw error;
    }
};


const getAllDogs = async () => {
    let dogAPI = await getDogsAPI();
    let dogDB = await getDogsDB();

    if( dogAPI || dogDB ) {
        let dogs = dogAPI.concat(dogDB);
        return dogs;
    } else {
        let error = new Error('No se pudo traer ningun dog');
        throw error;
    }
}


module.exports = {
    getAllDogs
}