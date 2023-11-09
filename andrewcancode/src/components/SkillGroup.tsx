import React, { useState } from 'react'
import './skillgroup.css'
import FadeInSection from './FadeInSection';

function randomColor() {
  return `hsla(${~~(360 * Math.random())}, 70%,  67%, 0.8)`;
}

export default function SkillGroup( {group} ) {

  const summer = `hsla(${~~(90 * Math.random()-45)}, 70%,  67%, 0.8`;
  const fall = `hsla(${~~(90 * Math.random())}, 70%,  67%, 0.8`;
  const winter = `hsla(${~~(90 * Math.random()+180)}, 70%,  67%, 0.8`;
  const spring = `hsla(${~~(90 * Math.random())+80}, 70%,  67%, 0.8`;
  const all = randomColor();
  
  const [pastelColor,setPastelColor] = useState(all);

  return (
    <div className="skill-group">
      <button className="skill-head skill" style={{background: pastelColor}} onClick={event => setPastelColor(randomColor)}>{group[0]}</button>
      <div className="skills-box"> 
        {group.slice(1).map((item) => 
          <div key={item} className="skill" style={{background: pastelColor}}>
            {item}
          </div>
        )}       
      </div>
    </div>
  )
}
