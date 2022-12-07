import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getDogs} from '../../redux/actions/index'

import Navbar from '../Navbar/Navbar';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';

import './Home.css';



const Home = () => {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs())
  },[dispatch]);


  return (
    <>
      <Navbar />
      <Filters />

      <Cards 
        allDogs = {allDogs}
      />
    </>
  )
}

export default Home