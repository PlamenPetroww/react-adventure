import React from 'react';
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

export function HeroSection() {
    return (
        <div className="hero__container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className='hero__btns'>
                <Button className="btns" buttonsStyle="btn__outline"
                    buttonSize="btn__large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonsStyle="btn__primary"
                    buttonSize="btn__large">
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
