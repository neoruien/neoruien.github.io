import React from 'react'

function SkillSection({image,title}) {
    return (
        <div className="SkillSection">
            <img src={image} alt="" width="80rem"/>
            <p>{title}</p>
        </div>
    )
}

export default SkillSection;
