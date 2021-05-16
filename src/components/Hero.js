import '../App.css';
import React from 'react';
import headshot from '../images/headshot.jpg';
import herobackground from '../images/hero-background.jpg';
import heroplaceholder from '../images/hero-placeholder.jpg';
import ImageLoad from './ImageLoad';

const Hero = () => {
    return (
        <div className="Hero">
            <div id="color"></div>
            <ImageLoad src={herobackground} placeholder={heroplaceholder} alt='hero background img' />
            <div className="Titles">
                <img id="Headshot" src={headshot} alt='Professional Headshot' width="242" height="230" />
                <h1>DYLAN CERONIO</h1>
                <h2>Computer Scientist looking for Full-Time Software Engineering Opportunities</h2>
            </div>
        </div>
    );
}

export default Hero;