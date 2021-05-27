import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import SkillSection from '../Components/SkillSection';
import InterestSection from '../Components/InterestSection';
import softwareDev from '../img/software_development.svg';
import machineLearning from '../img/machine_learning.svg';
import dataAnalytics from '../img/data_analytics.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} />
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

            <Title title={'My Interests'} />
            <div className="interests-container">
                <InterestSection image={softwareDev} title={'Software Dev'} />
                <InterestSection image={machineLearning} title={'Machine Learning'} />
                <InterestSection image={dataAnalytics} title={'Data Analytics'} />                
            </div>

        </div>
    )
}

export default AboutPage;
