import React from 'react';
import data from './data'
import './index.css'

function index(props) {
  return (
    <div className="box-artist">
      {
        data.map(item => (
          <div className="artist-item" key={item.name}>
            <img src={item.image} alt={item.name} />
          </div>
        ))
      }
    </div>
  );
}

export default index;