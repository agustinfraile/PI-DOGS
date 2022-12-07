import React from 'react';
import { Link } from "react-router-dom";

import './Landing.css';

const Landing = () => {
  return (
    <>
      <div className='landing'>
        <div className='landing-cnt-top'>
        </div>

        <div className='landing-cnt-middle'>
          <div className='landing-cnt-middle--left'></div>
          <div className='landing-cnt-middle--center'>
            <Link to='/home'>
              <button className='landing-cnt-middle--button'>
                Ingresar
              </button>
            </Link>
          </div>
          <div className='landing-cnt-middle--right'></div>
        </div>

        <div className='landing-cnt-bottom'>
        </div>
      </div>
    </>
  )
}

export default Landing