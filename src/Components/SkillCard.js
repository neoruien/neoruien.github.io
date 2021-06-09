import React from 'react';

function SkillCard({image,title}) {
  return (
    <div className="SkillCard">
      <img src={image} alt="" width="80rem"/>
      <p>{title}</p>
    </div>
  )
}

export default SkillCard;
