import React from 'react'
import Title from '../components/Title'
import IntroSection from '../components/IntroSection';
import SkillSection from '../components/SkillSection';
import InterestSection from '../components/InterestSection';
import softwareDev from '../img/about/software_development.svg';
import machineLearning from '../img/about/machine_learning.svg';
import dataAnalytics from '../img/about/data_analytics.svg';
import java from '../img/about/java.svg';
import python from '../img/about/python.svg';
import html from '../img/about/html.svg';
import css from '../img/about/css.svg';
import javascript from '../img/about/javascript.svg';
import r from '../img/about/r.svg';
import matlab from '../img/about/matlab.svg';
import react from '../img/about/react.svg';
import flutter from '../img/about/flutter.svg';
import postgresql from '../img/about/postgresql.svg';
import adobexd from '../img/about/adobexd.svg';
import tableau from '../img/about/tableau.svg';
import unity from '../img/about/unity.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} />
            <IntroSection />
            
            <Title title={'My Skills'} />
            <div className="skills-list">
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
            
            {/* <p>Programming languages:</p>
            <SkillSection image={java} title="Java"/>
            <SkillSection image={python} title="Python"/>
            <SkillSection image={html} title="HTML"/>
            <SkillSection image={css} title="CSS"/>
            <SkillSection image={javascript} title="Javascript"/>
            <SkillSection image={r} title="R"/>
            <SkillSection image={matlab} title="MATLAB"/>

            <p>Frameworks:</p>
            <SkillSection image={react} title="React"/>
            <SkillSection image={flutter} title="Flutter"/>

            <p>Database systems:</p>
            <SkillSection image={postgresql} title="PostgreSQL"/>

            <p>Prototyping tools:</p>
            <SkillSection image={adobexd} title="Adobe XD"/>

            <p>Statistical tools:</p>
            <SkillSection image={tableau} title="Tableau"/>

            <p>Game engines:</p>
            <SkillSection image={unity} title="Unity"/> */}

            <Title title={'My Interests'} />
            <div className="interests-list">
                <InterestSection image={softwareDev} title={'Software Dev'} />
                <InterestSection image={machineLearning} title={'Machine Learning'} />
                <InterestSection image={dataAnalytics} title={'Data Analytics'} />                
            </div>

        </div>
    )
}

export default AboutPage;
