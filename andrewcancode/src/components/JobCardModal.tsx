import { Job } from '../models/Job'
import './JobCardModal.css'
import React from 'react'


export default function JobCardModal({ career, gridSettings, isOpen=false }) {
  console.log('../images/'+career.companyLogoURL)
  return (
    <>
      <div className="job-grid-item" id={career.jobID} style={{backgroundImage : `url(${career.companyBackgroundURL})`}}>
        <img src={require(`../images/${career.companyLogoURL}`)} alt="my bad" style={{backgroundColor: career.themeColor}}/>      
        <h3 className="grid-job-title">{career.title}</h3>
        <h3>{career.startDate} - {career.finishDate}</h3>
      </div> 
    </>

  )

}

