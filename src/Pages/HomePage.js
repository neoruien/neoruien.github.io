import React from 'react';
import ParticlesBackground from "../Components/ParticlesBackground";

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
            <button className="btn">View my work</button>
        </div>
        </div>
    )
}

export default HomePage;
