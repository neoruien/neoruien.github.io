import React from 'react';
import ParticlesBackground from "../components/ParticlesBackground";
import {NavLink} from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <ParticlesBackground />
            <div className="HomePage">
                <h1 className="home-text">
                    Hi, I am 
                    <span> Rui En.</span>
                </h1>
                <p className="home-subtext">
                    I am a website and mobile application developer.
                </p>
            
                <NavLink to="/portfolio" exact activeClassName="active">
                    <button className="home-button">
                        View my work
                    </button>
                </NavLink>
        </div>
        </div>
    )
}

export default HomePage;
