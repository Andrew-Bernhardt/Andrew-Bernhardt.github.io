import React, { useState } from 'react'
import SkillGroup from '../components/SkillGroup';
import jsonData from '../data/skills.json'
import FadeInSection from '../components/FadeInSection';

function JsonToSkills(jsonData) {
  var _skillSet: string[][] = [];

  //loop through json element
  jsonData.forEach(element => {
    
    const skill: string[] = [];
    skill.push(element['type']);
    let ski = element['skills'];
    ski.forEach(function (item) {
      skill.push(item);
    });

    _skillSet.push(skill);
  });

  return _skillSet;
}

export default function Skills() {
  
  const [skillSet,setSkillSet] = useState(JsonToSkills(jsonData))

  return (
    <div className="centered-container justify-content_left flex-direction_column">
      <FadeInSection> 
        {skillSet.map((skillGroup) => (  
              <SkillGroup key={skillGroup[0]} group={skillGroup}/>
        ))}
      </FadeInSection>
      
    </div>
  )
}
