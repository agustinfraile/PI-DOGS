import axios from 'axios'; 

export const GET_DOGS = 'GET_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';

export const getDogs = () => {
    return async function(dispatch) {
        try {
            const dogs = await axios.get("http://localhost:3001/dogs");
            return dispatch({
                type: GET_DOGS,
                payload: dogs.data
            });
        } catch (error) {
            throw new Error({error: 'Hay un error'})
        }
    }
}

export const getDogDetail = (id) => {
    return async function(dispatch) {
        try {
            const {data} = await axios.get(`http://localhost:3001/dogs/${id}`);

            return dispatch({
                type: GET_DOG_DETAIL,
                payload: data 
            });
        } catch (error) {
            throw new Error({error: 'Hay un error'});
        }
    }
}