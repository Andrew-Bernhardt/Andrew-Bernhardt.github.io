import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import './PastWork.css';
import { Job } from '../models/Job';
import jobData from '../data/jobdata.json'
import JobModal from '../components/JobModal';
import JobModal2 from '../components/JobModal2';

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
      startDate: element["startDate"],
      finishDate: element["finishDate"],
      yearsWorked: element["yearsWorked"],
      isWorking: element["isWorking"],
      jobDescription: element["jobDescription"],
      companyLogoURL: element["companyLogoURL"],
      companyBackgroundURL: element["companyBackgroundURL"],
      themeColor: element["themeColor"],
      rowWeight: element["rowWeight"],
      columnWeight: element["columnWeight"]
    }
    jobArray.push(job)
  });
  return jobArray;
}

export default function PastWork() {

  console.log(JsonToJob(jobData));

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

  const closeTheModal = () => {
    setModal2Open(false);
  }

  // if(modal==null)
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
      <div>
        {modal2Open && (
          <JobModal job={modal} closeModal={closeTheModal}/>
        )}
      </div>
    </>
  )
}
