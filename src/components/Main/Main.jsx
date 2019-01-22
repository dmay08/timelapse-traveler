import React from 'react';
import './Main.css';

const Main = (props) => {
    return (
        <div id="main">
            <div id="one"></div>

<div id="wrap">
  <div id="my-info"></div>
  <div class="title-wrap">
    <div class="title-line" id="title-line-left"></div>
    <h1 id="recent-video-text">Recent Videos</h1>
    <div class="title-line" id="title-line-right"></div>
  </div>

</div>

<div id="recent-video-wrap">
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
  <div class="title-wrap" id="compilation-wrap">
    <div class="title-line" id="title-line-left"></div>
    <h1 id="recent-video-text">Compilations</h1>
    <div class="title-line" id="title-line-right"></div>
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