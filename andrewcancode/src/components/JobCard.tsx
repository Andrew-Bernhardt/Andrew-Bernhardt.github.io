import { Job } from '../models/Job'
import './JobCard.css'
import React, { useState } from 'react'


export default function JobCard({ career, gridSettings, isOpen=false }) {
  

  const cardStyle = {
    backgroundImage : `url(${career.companyBackgroundURL})`,
    gridRowStart: 1,
    gridColumn: `span ${gridSettings[0]}`,
    gridRow: `span ${gridSettings[1]}`,
  }
  return (
      <button className="job-grid-item" id={career.jobID} style={cardStyle}>
        <img src={require(`../images/${career.companyLogoURL}`)} alt="my bad" style={{backgroundColor: career.themeColor}}/>      
        <h3 className="grid-job-title">{career.title}</h3>
        <h3>{career.startDate} - {career.finishDate}</h3>
      </button> 

  )

}

