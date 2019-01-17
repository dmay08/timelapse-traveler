import React from 'react';
import './Main.css';

const Main = (props) => {
    return (
        <div id="main">
            <div id="one"></div>
            <div id="wrap">
                <div id="two"></div>
            </div>
            <div id="outer-video-wrap">
                <div id="inner-video-wrap">
                    <div id ="a" className="videos"></div>
                    <div id ="b" className="videos"></div>
                    <div id ="c" className="videos"></div>
                </div>
            </div>
        </div>
    );
}

export default Main;