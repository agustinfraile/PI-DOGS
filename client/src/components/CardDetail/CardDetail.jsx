import React from 'react';
import './CardDetail.css';

const CardDetail = ({id, name, image, temperament, weight}) => {


  return (
    <div className='card'>
      <div className='card-img'>
        <img src={image} alt="" />
      </div>
      <div className='card-name'>
        <h2>{name}</h2>
      </div>
      <div className='card-temperament'>
        <h4>{temperament.join(', ')}</h4>
      </div>
      <div className='card-weight'>
        <h4>Entre ({weight})kg</h4>
      </div>
    </div>
  )
}

export default CardDetail