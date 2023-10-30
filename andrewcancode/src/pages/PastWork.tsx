import React, { useEffect, useState } from 'react';
import JobCardModal from '../components/JobCardModal';
import './PastWork.css';
import { Job } from '../models/Job';
import jobData from '../data/jobdata.json'


function JsonToJob(jsonData) {
  let jobArray = [];
  var job: Job;
  
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
    <div className="jobs-grid">
      {jobs.map((item) => (
        <div key={item.jobID}> 
          <JobCardModal career={item} gridSettings={[2,5]}/>
        </div>
      ))}
    </div>
  )
}
