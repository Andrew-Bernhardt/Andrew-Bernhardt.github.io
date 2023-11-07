import React from 'react'
import './skillgroup.css'

export default function SkillGroup(group, skills) {
  console.log(group);
  return (
    <>
      <div className="skill-head skill">
        <h3>{group[1]}</h3>
      </div>
      <div className="skills-box"> 
        
      </div>
    </>
  )
}
