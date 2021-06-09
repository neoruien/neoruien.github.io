import React from 'react';

function SkillCard({image,title}) {
  return (
    <abbr title={title}>
      <div className="SkillCard">
        <img src={image} alt="" width="60rem"/>
      </div>
    </abbr>
  )
}

export default SkillCard;
