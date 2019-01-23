import React from 'react';
import './Main.css';
import my_pic from '../../Images/my_pic.jpg';
import taipei from '../../Images/taipei.jpg';

const Main = (props) => {
    return (
        <div id="main">
            <div id="one">
              <img id="taipei" src={taipei}/>
            </div>

            <div id="wrap">
              <div id="my-info">
                <div id="my-pic-wrap">
                  <img id="my-pic" src={my_pic}/>
                </div>
                <div>
                  <div id="about-me">
                    <h2>Time[lapse] Traveler</h2>
                    <p>My name is Danny and I'm a little bit obsessed with shooting 
                      time-lapse videos. This past summer, my wife Noelle and I 
                      traveled the world to say our marriage vows and we were able
                      to see some extraordinary places. When we got back to the U.S.,
                      we packed our bags again and moved to Los Angeles. 
                      I built this website
                      to share some of our adventures (home and abroad). If you like what you see,
                      check me out on instagram @lapsed_traveler. Thanks for
                      stopping by!
                    </p>
                    <br></br>
                    <p>-D</p>
                  </div>
                </div>
              </div>
              <div className="title-wrap">
                <div className="title-line" id="title-line-left"></div>
                <h1 id="recent-video-text">Recent Videos</h1>
                <div className="title-line" id="title-line-right"></div>
              </div>
            </div>

            <div id="recent-video-wrap">
              <div id="outer-video-wrap">
                
                <div id ="a" class="video-wrap">
                  <div className="video"></div>
                  <div className="description"></div>
                </div>
                
                <div id ="b" className="video-wrap">
                  <div className="video"></div>
                  <div className="description"></div>
                </div>
                
                <div id ="c" className="video-wrap">
                  <div className="video"></div>
                  <div className="description"></div>
                </div>
              
              </div>
            </div>

            <div className="title-wrap" id="compilation-wrap">
              <div className="title-line" id="title-line-left"></div>
              <h1 id="recent-video-text">Compilations</h1>
              <div className="title-line" id="title-line-right"></div>
            </div>
            
            <div id="outer-large-wrap">
              <div id="inner-large-wrap">
                <div id="big-1"></div>
                <div id="big-1-description"></div>
              </div>
            </div>  
        </div>
    );
}

export default Main;