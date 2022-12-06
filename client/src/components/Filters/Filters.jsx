import React from 'react';
import './Filters.css';

const Filters = () => {
  return (
    <div className='filters'>
        <select className='filter filter_temperament'>
            <option value="">Select temperament</option>
        </select>

        <select className='filter filter_breed'>
            <option value="">Select breed</option>
        </select>

        <select className='filter filter_games'>
          <option value="all">All games</option>
          <option value="created">Games created</option>
          <option value="api">Games API</option>
        </select>

        <select className='filter filter_alphabetical'>
            <option value="">Alphabetical order</option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
        </select>

        <select className='filter filter_ranking'>
            <option value="">Order by ranking</option>
            <option value="best">Best ranking</option>
            <option value="worst">Worst ranking</option>
        </select>
    </div>
  )
}

export default Filters