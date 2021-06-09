import React from 'react';

function InterestCard({image, title}) {
    return (
        <div className="InterestCard">
            <div className="interest-container">
                <div className="interest-content">
                    <img className="interest-image" src={image} alt="" />
                    <h5 className="interest-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}

export default InterestCard;
