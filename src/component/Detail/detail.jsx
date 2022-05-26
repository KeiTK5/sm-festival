import React from 'react';
import './index.css';
import Item from './Item/item';
import Track from './Track/track';
import data from '../Albums/data/data'
import { useLocation } from 'react-router-dom';
function Detail(props) {
    const location = useLocation()
    const cut = location.pathname.slice(8)

    return (
        <div className='container-detail'>
            <div className="title-main detail">
                Digital Singel
            </div>
            <div className="container-cd">

                <div className="left-cd">
                    {
                        data?.map((item,index) => (
                            item?.name == cut ? <Item key={index} item={item} />
                                : null
                        ))
                    }
                    <Track />
                </div>
                <div className="right-cd">
                    <div className="image-albums-detail">
                        {
                            data?.map((item, index) => (
                                item?.name == cut ? <img key={index} src={item.image} alt="" />
                                    : null
                            ))
                        }
                    </div>
                    <div className="intro-albums">
                        Unveiled last year, the MAP OF THE SOUL series contains the honest and heartfelt story of BTS and their journey of discovering their true selves. The first chapter of this story, “MAP OF THE SOUL : PERSONA”, sang about the world and the joy of love, and the discovery of the self as it is displayed to the world; “MAP OF THE SOUL : 7” now turns inward to the shadow within in a candid acknowledgement that it, too, is part of the self. <br /> <br />

                        “MAP OF THE SOUL : 7” looks back on the past seven years of BTS since their debut as seven members of one team. The journey was not always smooth sailing, and there were special travails that they had to endure in their rise as global superstars. Now, understanding that the scars left by those hardships is a part of their real selves, BTS accepts both “the self I want to show” and the “self I want to scorn” to at last tell their own story of finding their “real and complete selves”. <br /> <br />

                        Bridging fine art and popular art through such initiatives as the global art project CONNECT, BTS and the “Black Swan” art film featuring a modern dance interpretation of the early-release track, BTS is poised to show their latest growth as artist through “MAP OF THE SOUL : 7”. <br />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Detail;