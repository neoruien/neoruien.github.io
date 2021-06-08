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

// function SkillSection({image,title}) {
//     return (
//         <div className="SkillSection">
//             <img src={image} alt="" width="80rem"/>
//             <p>{title}</p>
//         </div>
//     )
// }

export default SkillSection;
