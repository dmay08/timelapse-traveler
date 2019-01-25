import React from 'react';
import './CompilationVideos.css';


const CompilationVideos = (props) => {
    return (
        <div id="recent-video-wrap">
            <div id="outer-video-wrap">
                
                <div id ="a" class="video-wrap">
                    <div className="video">
                        <iframe width="347" height="200" src="https://www.youtube.com/embed/LAIXZ4evg5M?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                    </div>
                    <div className="description"></div>
                </div>
                
                <div id ="b" className="video-wrap">
                    <div className="video">
                        <iframe width="347" height="200" src="https://www.youtube.com/embed/UceBHNagqck?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="description"></div>
                </div>
                
                <div id ="c" className="video-wrap">
                    <div className="video">
                        <iframe width="347" height="200" src="https://www.youtube.com/embed/tzMVczq280Q?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="description"></div>
                </div>
              
            </div>
        </div>
    );
}

export default CompilationVideos;