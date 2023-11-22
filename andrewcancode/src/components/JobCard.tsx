import { Job } from '../models/Job'
import './JobCard.css'
import React, { useState } from 'react'
import JobModal from './JobModal';


export default function JobCard({ career, gridSettings, onClickCallback}) {

  const cardStyle = {
    backgroundImage : `url(${career.companyBackgroundURL})`,
    gridRowStart: 1,
    gridColumn: `span ${gridSettings[0]}`,
    gridRow: `span ${gridSettings[1]}`,
  }

  const handleClick = () => {
    // Execute the callback function passed from MyClass
    if (onClickCallback) {
      onClickCallback(career);
    }
  };

  console.log(`url(${career.companyBackgroundURL})`);

  return (
      <div className="job-grid-item" id={career.jobID} style={cardStyle} onClick={handleClick}>
        <img src={require(`../images/${career.companyLogoURL}`)} alt="my bad" style={{backgroundColor: career.backgroundColor}}/>      
        <h3 className="grid-job-title">{career.title}</h3>
        <h3>{career.startDate} - {career.finishDate}</h3>
      </div>  
      /* <div>
        {isModalOpen && (
          <JobModal job={career} closeModal={closeModal} />
        )}
      </div>   */    

  )

}

