import React from 'react';
import './NavBar.css';


const NavBar = (props) => {
    return (
        <div className='NavBar-wrap'>
            <div className='NavBar'>
                <div className="nav-thirds" id="first">
                    <p>T / T</p>
                </div>
                <div className="nav-thirds" id="second">
                    <p>Time(lapse) Traveler</p>
                </div>
                <div className="nav-thirds" id="third">
                </div>
            </div>
        </div>
    );
}

export default NavBar;