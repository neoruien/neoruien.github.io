import React, { useState } from 'react'
import Title from '../components/Title'
import IntroSection from '../components/IntroSection';
import SkillSection from '../components/SkillSection';
import InterestSection from '../components/InterestSection';

import Carousel from "react-simply-carousel";
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

import softwareDev from '../img/about/software_development.svg';
import machineLearning from '../img/about/machine_learning.svg';
import dataAnalytics from '../img/about/data_analytics.svg';

function AboutPage() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div className="AboutPage">
            <Title title={'About Me'} />
            <IntroSection />
            <Title title={'My Skills'} />
            <div>
                <Carousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={1}
                    itemsToScroll={1}
                    updateOnItemClick
                    containerProps={{
                        style: {
                            width: "100%",
                            justifyContent: "space-between"
                        }
                    }}
                    forwardBtnProps={{
                        children: <FontAwesomeIcon icon={faAngleRight} className="carousel-button"/>,
                        style: {
                            width: "2.5rem",
                            height: "2.5rem",
                            alignSelf: "center",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                        }
                    }}
                    backwardBtnProps={{
                        children: <FontAwesomeIcon icon={faAngleLeft} className="carousel-button"/>,
                        style: {
                            width: "2.5rem",
                            height: "2.5rem",
                            alignSelf: "center",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                        }
                    }}
                    speed={500}
                >
                    <div className="skills-category">
                        <p>Programming languages:</p>
                        <div className="skills-container">
                            <SkillSection image={java} title="Java"/>
                            <SkillSection image={python} title="Python"/>
                            <SkillSection image={html} title="HTML"/>
                            <SkillSection image={css} title="CSS"/>
                            <SkillSection image={javascript} title="Javascript"/>
                            <SkillSection image={r} title="R"/>
                            <SkillSection image={matlab} title="MATLAB"/>
                        </div>
                    </div>
                    <div className="skills-category">
                        <p>Frameworks:</p>
                        <div className="skills-container">
                            <SkillSection image={react} title="React"/>
                            <SkillSection image={flutter} title="Flutter"/>
                        </div>
                    </div>
                    <div className="skills-category">
                        <p>Database systems:</p>
                        <div className="skills-container">
                            <SkillSection image={postgresql} title="PostgreSQL"/>
                        </div>
                    </div>
                    <div className="skills-category">
                        <p>Prototyping tools:</p>
                        <div className="skills-container">
                            <SkillSection image={adobexd} title="Adobe XD"/>
                        </div>
                    </div>
                    <div className="skills-category">
                        <p>Statistical tools:</p>
                        <div className="skills-container">
                            <SkillSection image={tableau} title="Tableau"/>
                        </div>
                    </div>
                    <div className="skills-category">
                        <p>Game engines:</p>
                        <div className="skills-container">
                            <SkillSection image={unity} title="Unity"/>
                        </div>
                    </div>
                </Carousel>
            </div>
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
