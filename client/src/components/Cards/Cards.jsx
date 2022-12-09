import React from 'react';
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';
import './Cards.css'

const Cards = ({allDogs}) => {
  return (
    <div className='cards'>
        {
            allDogs?.map(dog => {
                return (
                    <Link 
                        to={`/dog/${dog.id}`} 
                        key={dog.id}
                    >
                        <CardDetail 
                            id = {dog.id}
                            key = {dog.id}
                            name = {dog.name}
                            image = {dog.image}
                            temperament = {dog.temperament}
                            weight = {dog.weight}
                        />
                    </Link>
                )
            })
                
        }
    </div>
  )
}

export default Cards