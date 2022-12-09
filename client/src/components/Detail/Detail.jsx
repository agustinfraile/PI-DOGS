import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDogDetail } from '../../redux/actions';
import Navbar from '../Navbar/Navbar'
import NotFound from '../NotFound/NotFound';

const Detail = () => {

    const dispatch = useDispatch();
    const detailDog = useSelector(state => state.dog);

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDogDetail(id))
    }, [dispatch, id])

    console.log(detailDog);

    let filter;

    const filterId = () => {
        if(detailDog.createInDb) {
            filter = detailDog.id;
        } else {
            filter = Number(id);
        }

        console.log(filter)
        return filter;
    }

  return (
    filterId() ?
        <>
            <Navbar />


            <div className='card'>
                <div className='card-img'>
                    <img src={detailDog.image} alt="" />
                </div>
                <div className='card-name'>
                    <h2>{detailDog.name}</h2>
                </div>
                <div className='card-temperament'>
                    <h4>
                        {
                        detailDog.temperament
                        }
                    </h4>
                </div>
                <div className='card-weight'>
                    <h4>Entre ({detailDog.weight})kg</h4>
                </div>
            </div>

        </>
    : <NotFound />
  )
}

export default Detail