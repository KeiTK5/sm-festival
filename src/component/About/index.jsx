import React from 'react';
import './index.css'
import { WaveBig } from '../../assets/image'
import Page from './Page/page';
import LazyLoad from 'react-lazyload'

function index(props) {
  return (
    <div className='our-tour'>
      <div className="content-main">Our tour</div>
      <div className="wave-main">
        <LazyLoad>
          <img src={WaveBig} alt="wave" />
        </LazyLoad>
      </div>
      <div className="sub-content">
        rise your emition & wishes to expend pleasure time with us in this 2022 all arround the word
      </div>
      <Page />
    </div>
  );
}

export default index;