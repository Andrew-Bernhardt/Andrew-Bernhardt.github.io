import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import './PastWork.css';
import { Job } from '../models/Job';
import jobData from '../data/jobdata.json'
import JobModal from '../components/JobModal';

let job: Job;
function JsonToJob(jsonData) {
  const jobArray: Job[] = [];
  
  //loop through json element
  jsonData.forEach(element => {
    console.log(element);
    job = {
      jobID: element["jobID"], 
      title: element["title"],
      company: element["company"],
      location: element["location"],
      startDate: element["startDate"],
      finishDate: element["finishDate"],
      yearsWorked: element["yearsWorked"],
      isWorking: element["isWorking"],
      jobDescription: element["jobDescription"],
      companyLogoURL: element["companyLogoURL"],
      companyBackgroundURL: element["companyBackgroundURL"],
      backgroundColor: element["backgroundColor"],
      themeColor: element["themeColor"],
      rowWeight: element["rowWeight"],
      columnWeight: element["columnWeight"]
    }
    jobArray.push(job)
  });
  return jobArray;
}

export default function PastWork() {

  const[jobs, setJobs] = useState(JsonToJob(jobData));
  const[counter, setCounter] = useState(0);
  const[modal, setModal] = useState(job);
  const[modal2Open, setModal2Open] = useState(false);

  const handleMyComponentClick = (job1: Job) => {
    console.log(job1);
    setModal2Open(true);
    setModal(job1);
    setCounter(counter + 1);
  }

  const openTheModal = () => {
    setModal2Open(true);
  };

  const closeTheModal = () => {
    setModal2Open(false);
  }

  return (
    <>
      <div className="jobs-grid">
        {jobs.map((item: Job) => (
            <JobCard key={item.jobID} career={item} gridSettings={[item.columnWeight,item.rowWeight]} onClickCallback={handleMyComponentClick}/>
        ))}
        <div>
          <h1>{counter}</h1>
        </div>
      </div>
      {modal2Open && (
        <div>
          <div className="modal-box" onClick={closeTheModal}></div>
          <JobModal job={modal} closeModal={closeTheModal} customClass={modal2Open ? 'modal-fade-in active' : 'modal-fade-in'}/>
        </div>
      )}
    </>
  )
}
