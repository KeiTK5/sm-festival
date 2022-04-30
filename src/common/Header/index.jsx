import React, { useRef } from 'react';
import {
   Logo,
   Union,
   EN,
   Background,
   Wave,
} from '../../assets/image'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom';
import './index.css'
import data from './data/data'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function Header() {
   const location = useLocation()
   const home_page = '/'
   return (
      <div className='banner'>
         {location.pathname === home_page ? <LazyLoad> <img src="/image/banner.png" alt="banner" className='banner-image' /></LazyLoad> : ""}

         <div className="header">
            <div className="logo">
               <img src={Logo} alt="logo" className='logo' />
            </div>
            <div className="redirect">
               {data.map((item, index) => (
                  <Link to={item.path} key={index} className={`item-link ${location.pathname === item.path ? "active" : ""}`}>{item.title}
                     <div className="before-wave">
                        <img src={Wave} alt="" />
                     </div>
                  </Link>
               ))}

            </div>
            <div className="box-support">
               <img src={Union} alt="support" className='item-support' />
               <img src={EN} alt="support" className='item-support en' />
            </div>
         </div>
         {location.pathname === home_page ?
            <>
               <div className="main-word">
                  Whalien 52 Tour
               </div>

               <div className="page-index">
                  <div className="name-page">
                     <div className="name-left">Home</div>
                     <div className="arrow"> {<i className='bx bx-chevron-right' ></i>} </div>
                     <div className="name-right">Tours</div>
                  </div>
               </div>
            </>
            : ""}
      </div>
   );
}

export default Header;