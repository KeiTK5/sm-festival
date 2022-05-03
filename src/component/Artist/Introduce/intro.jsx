import React from 'react';
import './index.css'
function Intro(props) {
    return (
        <div className='introduce'>
            <div className="box-slogan">
                <div className="slogan">
                    Avatar X Experience
                </div>
                <div className="sub-slogan">
                    Be my ae! Hi, we are Aespa!
                </div>
            </div>
            <div className="box-intro">
                <div className="item-intro">
                    Aespa (에스파), stylized as Aespa, is a 4 member South Korean girl group under SM Entertainment. The group consists of Karina, Giselle, Winter and NingNing. They debuted on November 17, 2020 with the digital single “Black Mamba”.
                    The group's name, Aespa, combines the English initials of "avatar" and "experience" (Avatar X Experience) with the English word "Aspect", meaning "two sides", to symbolize the idea of "meeting another self and experiencing the new world"
                </div>
            </div>
        </div>
    );
}

export default Intro;