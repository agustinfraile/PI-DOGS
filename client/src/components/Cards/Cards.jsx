import React from 'react';
import CardDetail from '../CardDetail/CardDetail';
import './Cards.css'

const Cards = ({allDogs}) => {
  return (
    <div className='cards'>
        {
            allDogs?.map(dog => {
                return (
                    <CardDetail 
                        id = {dog.id}
                        key = {dog.id}
                        name = {dog.name}
                        image = {dog.image}
                        temperament = {dog.temperament}
                        weight = {dog.weight}
                    />
                )
            })
                
        }
    </div>
  )
}

export default Cards