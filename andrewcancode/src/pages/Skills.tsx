import React, { useState } from 'react'
import SkillGroup from '../components/SkillGroup';
import jsonData from '../data/skills.json'

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
    console.log("Assembling skillset: "+_skillSet);
  });
  console.log("this is what is being returned: ");
  console.log(_skillSet);

  return _skillSet;
}

export default function Skills() {
  
  const [skillSet,setSkillSet] = useState(JsonToSkills(jsonData))
  console.log(skillSet);
  console.log(skillSet[0][0]);

  return (
    <div className="centered-container justify-content_left flex-direction_column">
        {/* {skillSet.map((skillGroup) => (          
          <SkillGroup key={skillGroup[0]} group={skillGroup[0]}/>
        ))} */}
    </div>
  )
}
