import React from 'react';
import './index.css'
function Songs(props) {
    const { item } = props
    return (
        <div className="item-song" key={item?.id}>
            <div className="image-song">
                <img src={item?.image} alt={item?.name} />
            </div>
            <div className="intro-song">
                <div className="type-song">
                    {item?.type}
                </div>
                <div className="name-song">
                    {item?.name}
                </div>
            </div>
        </div>
    );
}

export default Songs;