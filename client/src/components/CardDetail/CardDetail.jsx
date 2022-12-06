import React from 'react';
import './CardDetail.css';

const CardDetail = ({id, name, image}) => {


  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <h4>{id}</h4>
      </div>
    </div>
  )
}

export default CardDetail