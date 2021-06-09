import React from 'react'
import Title from '../components/Title'
import IntroSection from '../components/IntroSection';
import SkillSection from '../components/SkillSection';
import InterestSection from '../components/InterestSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} />
            <IntroSection />
            <Title title={'My Skills'} />
            <SkillSection />
            <Title title={'My Interests'} />
            <InterestSection />
        </div>
    )
}

export default AboutPage;
