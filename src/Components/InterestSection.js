import React from 'react';

function InterestSection({image, title}) {
    return (
        <div className="InterestSection">
            <div className="interest">
                <div className="interest-content">
                    <img className="interest-img" src={image} alt="" />
                    <h5 className="interest-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}

export default InterestSection;
