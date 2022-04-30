import React from 'react';
import './index.css'
import Button from '../../common/button/button.jsx'
import Btn from '../../common/buttonFull/btn.jsx'
function index(props) {
   return (
      <div className='time-line'>
         <div className="line-white"></div>
         <div className="title-box">
            <div className="title-main-time">
               hurry up! battle start soon
            </div>
            <div className="title-sub-time">
               whalien 51 worldwide music tours
            </div>
         </div>
         <div className="time-countdown">
            <div className="box-countdown">
               <span className="countdown-time">00</span>
               <span className="countdown-days">days</span>
            </div>
            <div className="box-countdown">
               <span className="countdown-time">22</span>
               <span className="countdown-days">hours</span>
            </div>
            <div className="box-countdown">
               <span className="countdown-time">33</span>
               <span className="countdown-days">minutes</span>
            </div>
            <div className="box-countdown">
               <span className="countdown-time">44</span>
               <span className="countdown-days">seconds</span>
            </div>
         </div>
         <div className="box-button">
            <Button content={'View Detail'} />
            <Btn />
         </div>
      </div>
   );
}

export default index;