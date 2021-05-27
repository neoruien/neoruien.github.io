import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillSection from '../Components/SkillSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
            <SkillSection title={"React JS"} progress={"80%"} />
                <SkillSection title={"Java"} progress={"80%"} />
                <SkillSection title={"Javascript"} progress={"80%"} />
                <SkillSection title={"Adobe XD"} progress={"80%"} />
                <SkillSection title={"Python"} progress={"70%"} />
                <SkillSection title={"PostgreSQL"} progress={"70%"} />
                <SkillSection title={"R"} progress={"60%"} />
                <SkillSection title={"Flutter"} progress={"60%"} />
                <SkillSection title={"MATLAB"} progress={"60%"} />
                <SkillSection title={"React Native"} progress={"50%"} />
                <SkillSection title={"Unity"} progress={"50%"} />
                <SkillSection title={"Tableau"} progress={"50%"} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
