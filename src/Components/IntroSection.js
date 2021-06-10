import React from 'react';
import about from '../img/about/about.jpg';

function IntroSection() {
    return (
        <div className="IntroSection">
            <div className="about-img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Rui En</span></h4>
                <p className="about-text">
                    .. and I like developing software!
                    <br/><br/>
                    My specialty lies in front-end web development.
                    My interests extend beyond the web and I am intrigued by data science technologies.
                    This is a place for me to share my interests in the form of fun projects I have created in the past.
                    My academic education is in Computer Science at the National University of Singapore.
                    Feel free to explore around and join me on my adventures.
                </p>
            </div>
        </div>
    )
}

export default IntroSection;
