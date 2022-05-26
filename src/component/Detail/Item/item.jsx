import React from 'react';
import Button from '../../../common/button/button'

function Item(props) {
  const { item } = props
  console.log(item);
  return (
    <div className="box-item">
      <div className="box-cd">
        <div className="image-cd">
          <img src={item?.image} alt="" />
        </div>
        <div className="info-cd">
          <div className="name-cd">
            {item?.name}
          </div>
          <div className="release-cd">
            {(item?.date).toJSON().slice(0,10)}
          </div>
          <Button content={'Buy Album'} />
        </div>
      </div>
      <div className="intro-cd">
        <p className="text">
          BTS Releases 4th Studio Album “MAP OF THE SOUL : 7”!
          A heartfelt story of BTS and their search for their “real selves”
          BTS will release their fourth studio album “MAP OF THE SOUL : 7” on February 21.
        </p>
      </div>
    </div>
  );
}

export default Item;