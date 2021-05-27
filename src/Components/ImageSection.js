import React from 'react';
import about from '../img/about.jpg';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Rui En</span></h4>
                <p className="about-text">
                    .. and I'm a sophormore studying Computer Science at National University of Singapore!
                    <br/><br/>
                    I am keen in creating website and mobile applications.
                    I aspire to further develop both my front-end and back-end skills, in alignment with my goal of becoming a full-stack developer.
                    I am also learning machine learning and data analytics as I would like to incorporate these aspects into my applications.
                </p>
                <div className="icons">
                    <a href="https://github.com/neoruien" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faGithub} className="icon github" />
                    </a>
                    <a href="https://www.linkedin.com/in/neoruien/" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                    </a>
                    <a href="https://play.google.com/store/apps/dev?id=5396492611515241422" target="_blank" rel="noopener noreferrer" className="icon-box">
                        <FontAwesomeIcon icon={faGooglePlay} className="icon googleplay" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
