import React from 'react';
import { BigHit } from '../../assets/image'
import './index.css'
function index(props) {
    return (
        <div className='section-footer'>
            <div className="logo-bighit">
                <img src={BigHit} alt="logo" className='image-bighit' />
                <span className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
                </span>
            </div>
            <div className="hotline">
                <div className="box-hotline">
                    <div className="overlay"></div>
                    <div className="icon-hotline">
                        <i className='bx bxs-map' ></i>
                    </div>
                    <div className="detail-hotline">
                        <div className="detail-item">
                            Chalabon, Dokkhin Khan
                        </div>
                        <div className="detail-item">
                            Chalabon, Dokkhin Khan
                        </div>
                    </div>
                </div>
                <div className="box-hotline">
                    <div className="overlay"></div>
                    <div className="icon-hotline">
                        <i className='bx bx-envelope'></i>
                    </div>
                    <div className="detail-hotline">
                        <div className="detail-item">
                            abc@gmail.com
                        </div>
                        <div className="detail-item">
                            abc.xyz@gmail.com
                        </div>
                    </div>
                </div>
                <div className="box-hotline">
                    <div className="overlay"></div>
                    <div className="icon-hotline">
                        <i className='bx bx-phone' ></i>
                    </div>
                    <div className="detail-hotline">
                        <div className="detail-item">
                            (0+) 123 456 789
                        </div>
                        <div className="detail-item">
                            (0+) 123 456 789
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                COPYRIGHT © 2021 <span className="big-hit">BIG HIT</span> MUSIC / HYBE. ALL RIGHTS RESERVED <br /> Design & Develop With Love
            </div>
        </div>
    );
}

export default index;