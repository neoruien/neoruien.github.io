import React, { useState } from 'react';
import SkillCard from './SkillCard';

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

function SkillSection() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div className="SkillSection">
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
                <div className="skill-category">
                    <p className="category-title">Programming languages:</p>
                    <div className="category-cards">
                        <SkillCard image={java} title="Java"/>
                        <SkillCard image={python} title="Python"/>
                        <SkillCard image={html} title="HTML"/>
                        <SkillCard image={css} title="CSS"/>
                        <SkillCard image={javascript} title="Javascript"/>
                        <SkillCard image={r} title="R"/>
                        <SkillCard image={matlab} title="MATLAB"/>
                    </div>
                </div>
                <div className="skill-category">
                    <p className="category-title">Frameworks:</p>
                    <div className="category-cards">
                        <SkillCard image={react} title="React"/>
                        <SkillCard image={flutter} title="Flutter"/>
                    </div>
                </div>
                <div className="skill-category">
                    <p className="category-title">Database systems:</p>
                    <div className="category-cards">
                        <SkillCard image={postgresql} title="PostgreSQL"/>
                    </div>
                </div>
                <div className="skill-category">
                    <p className="category-title">Prototyping tools:</p>
                    <div className="category-cards">
                        <SkillCard image={adobexd} title="Adobe XD"/>
                    </div>
                </div>
                <div className="skill-category">
                    <p className="category-title">Statistical tools:</p>
                    <div className="category-cards">
                        <SkillCard image={tableau} title="Tableau"/>
                    </div>
                </div>
                <div className="skill-category">
                    <p className="category-title">Game engines:</p>
                    <div className="category-cards">
                        <SkillCard image={unity} title="Unity"/>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default SkillSection;
