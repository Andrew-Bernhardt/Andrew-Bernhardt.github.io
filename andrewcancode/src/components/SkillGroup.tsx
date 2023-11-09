import React from 'react'
import './skillgroup.css'

export default function SkillGroup( group ) {
  console.log(group);
  // console.log("SKILLS: "+ skills);
  return (
    <div className="skill-group">
      <div className="skill-head skill">{group}</div>
      <div className="skills-box"> 
        {/* {skills.map((item) => 
          <div keyclassName="skill">
            {ski}
          </div>
        )}        */}
      </div>
    </div>
  )
}
