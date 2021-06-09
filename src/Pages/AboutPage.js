import React from 'react'
import Title from '../components/Title'
import IntroSection from '../components/IntroSection';
import SkillSection from '../components/SkillSection';
import InterestSection from '../components/InterestSection';

import softwareDev from '../img/about/software_development.svg';
import machineLearning from '../img/about/machine_learning.svg';
import dataAnalytics from '../img/about/data_analytics.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} />
            <IntroSection />
            <Title title={'My Skills'} />
            <SkillSection />
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
