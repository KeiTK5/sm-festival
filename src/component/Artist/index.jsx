import React from 'react';
import Intro from './Introduce/intro';
import data from './data'
import './index.css'
import { Avatar, Avatar2, Avatar3, Avatar4, Avatar5 } from '../../assets/image'

function index(props) {
  return (
    <div className="container-artist">
      <div className="box-artist">
        {
          data.map(item => (
            <div className="artist-item" key={item.name}>
              <img src={item.image} alt={item.name} />
            </div>
          ))
        }
      </div>
      <Intro />
    </div>
  );
}

export default index;