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
  const handleMyComponentClick = () => {
    setCounter(counter + 1);
  }

  const[modal, setModal] = useState(null);
  const[modal2Open, setModal2Open] = useState(false);

  const removeModal = () => {
    console.log("removing modal");
    setModal(null)
  }
  const callModal = () => {
    console.log("clicked");
  }

  if(modal==null)
  return (
    <>
      <div className="jobs-grid">
        {jobs.map((item: Job) => (
            <JobCard key={item.jobID} career={item} gridSettings={[item.columnWeight,item.rowWeight]} onClickCallBack={handleMyComponentClick}/>
        ))}
      </div>
      <div>
        {modal2Open && (
          <JobModal2 job={modal}/>
        )}
      </div>
    </>
  )
}
