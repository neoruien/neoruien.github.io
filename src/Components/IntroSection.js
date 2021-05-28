import React from 'react';
import about from '../img/about.jpg';

function IntroSection() {
    return (
        <div className="IntroSection">
            <div className="about-img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Rui En</span></h4>
                <p className="about-text">
                    .. and I'm a penultimate student studying Computer Science at National University of Singapore!
                    <br/><br/>
                    I like creating website and mobile applications.
                    I aspire to further develop both my front-end and back-end skills, in alignment with my goal of becoming a full-stack developer.
                    I am also learning machine learning and data analytics as I would like to incorporate these aspects into my applications.
                </p>
            </div>
        </div>
    )
}

export default IntroSection;
