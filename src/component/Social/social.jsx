import React from 'react';
import './index.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Avatar, Avatar2, Avatar3, Avatar4, Avatar5, WinterA } from '../../assets/image'
function Social(props) {
  const options = {
    rewind: true,
    perPage: 6,
    rewind: true,
    type: 'loop',
    pagination: false,
    arrows: false
  }
  return (
    <div className="section-social">
      <Splide options={options} aria-label="My Favorite Images">
        <SplideSlide>
          <img src={Avatar} alt="avatar" className='avatar-slide' />
          <div className="hidden">
            <Link to="#" className='link-instagram'><i className='bx bxl-instagram'></i></Link>
            <div className="name-artist">Suga</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={Avatar2} alt="avatar" className='avatar-slide' />
          <div className="hidden">
            <Link to="#" className='link-instagram'><i className='bx bxl-instagram'></i></Link>
            <div className="name-artist">Suga</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={Avatar3} alt="avatar" className='avatar-slide' />
          <div className="hidden">
            <Link to="#" className='link-instagram'><i className='bx bxl-instagram'></i></Link>
            <div className="name-artist">Suga</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={Avatar4} alt="avatar" className='avatar-slide' />
          <div className="hidden">
            <Link to="#" className='link-instagram'><i className='bx bxl-instagram'></i></Link>
            <div className="name-artist">Suga</div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={Avatar5} alt="avatar" className='avatar-slide' />
          <div className="hidden">
            <Link to="#" className='link-instagram'><i className='bx bxl-instagram'></i></Link>
            <div className="name-artist">Suga</div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Social;