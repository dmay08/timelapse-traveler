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
  <div id ="a" class="video-wrap">
    <div class="video"></div>
    <div class="description"></div>
  </div>
  <div id ="b" class="video-wrap">
    <div class="video"></div>
    <div class="description"></div>
  </div>
  <div id ="c" class="video-wrap">
    <div class="video"></div>
    <div class="description"></div>
  </div>
</div>

<div id="big-videos-wrap">
  <div id="big-1"></div>
  <div id="big-1-description"></div>
</div>
  
        </div>
    );
}

export default Main;