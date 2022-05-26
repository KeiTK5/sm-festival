import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Songs(props) {
    const { item } = props
    return (
        <div className="item-song" key={item?.id}>
            <div className="image-song">
                <Link to={`/albums/${item?.name}`}>
                    <img src={item?.image} alt={item?.name} />
                </Link>
            </div>
            <div className="intro-song">
                <div className="type-song">
                    {item?.type}
                </div>
                <div className="name-song">
                    <Link to={`/albums/${item?.name}`}>
                        {item?.name}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Songs;