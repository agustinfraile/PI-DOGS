import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav_bar'>
        <Link 
          className='nav_bar-logo' 
          to='/home'
        >
          <div>DOGS</div>
        </Link>
        <div className='nav_bar-pages'>
            <ul>
                <li>Create videogame</li>
                <li>About</li>
            </ul>
        </div>
        <div className='nav_bar-search'>
            <SearchBar />
        </div>
    </div>
  )
}

export default Navbar