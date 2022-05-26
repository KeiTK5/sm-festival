import React from 'react';
import './index.css'
function Intro(props) {
    return (
        <div className='introduce'>
            <div className="box-slogan">
                <div className="slogan">
                    We’re on some path
                </div>
                <div className="sub-slogan">
                    That’s set since we’re born, but I still believe we can change some things.
                </div>
            </div>
            <div className="box-intro">
                <div className="item-intro">
                    The members of BTS are RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook. Gaining recognition for their authentic and self-produced music, top-notch performances, and the way they interact with their fans, BTS has established themselves as “21st century Pop Icons” breaking countless world records. While imparting a positive influence through activities such as the LOVE MYSELF campaign and the UN ‘Speak Yourself’ speech, the band has mobilized millions of fans across the world (named ARMY), collected four No. 1 songs in a span of 9 months, performed multiple sold-out stadium shows across the world, and been named TIME’s Entertainer of the Year 2020. BTS has been nominated for Best Pop Duo/Group Performance for the 63rd Grammy Awards and recognized with numerous prestigious awards like the Billboard Music Awards, American Music Awards and MTV Video Music Awards.
                </div>
            </div>
        </div>
    );
}

export default Intro;