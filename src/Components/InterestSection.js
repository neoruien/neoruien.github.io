import React from 'react';
import InterestCard from './InterestCard';

import softwareDev from '../img/about/software_development.svg';
import machineLearning from '../img/about/machine_learning.svg';
import dataAnalytics from '../img/about/data_analytics.svg';

function InterestSection() {
    return (
        <div className="InterestSection">
            <InterestCard image={softwareDev} title={'Software Dev'} />
            <InterestCard image={machineLearning} title={'Machine Learning'} />
            <InterestCard image={dataAnalytics} title={'Data Analytics'} />                
        </div>
    )
}

export default InterestSection;
