import React from 'react';
import Button from '../../../../common/button/button';
import { Address, Time } from '../../../../assets/image'
function ListNews(props) {
   const { item } = props
   return (
      <div className='box-news'>
         <div className='circle-info'>
            <p className='day'>{item?.day} <br /> <span className='year'>{item?.year}</span>  </p>
         </div>
         <div className="info-news">
            <div className="title-news">
               {item?.title}
            </div>
            <div className="nation-news">
               <div className="address-news">
                  <img src={Address} alt="" className='address' />{item?.nation}
               </div>
               <div className="time-news">
                  <img src={Time} alt="" className='address' />{item?.time}
               </div>
            </div>
            <Button content={'Buy Ticket'} />
         </div>
      </div>
   );
}

export default ListNews;