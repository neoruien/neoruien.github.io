import React from 'react'

function SkillSection({title,progress}) {
    return (
        <div className="SkillSection">
            <div className="skills-container">
                <h5 className="skill-title">{title}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{width:progress}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection;
