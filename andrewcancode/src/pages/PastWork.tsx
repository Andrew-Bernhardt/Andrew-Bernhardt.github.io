import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import './PastWork.css';
import { Job } from '../models/Job';
import jobData from '../data/jobdata.json'
import JobModal from '../components/JobModal';


function JsonToJob(jsonData) {
  const jobArray: Job[] = [];
  let job: Job;
  
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
  const[isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setJobs(JsonToJob(jobData))
  // }, []);

  return (
    <div>
      <JobModal/>
      <div className="jobs-grid">
        {jobs.map((item: Job) => (
            <JobCard key={item.jobID} career={item} gridSettings={[item.columnWeight,item.rowWeight]}/>
        ))}
      </div>
    </div>
  )
}
