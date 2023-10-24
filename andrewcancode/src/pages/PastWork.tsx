import React, { useEffect, useState } from 'react';
import JobCardModal from '../components/JobCardModal';
import './PastWork.css';
import { Job } from '../models/Job';

const jobTerminix: Job = {
  jobID: 1,
  title: "Web Developer",
  company: "Terminix",
  startDate: "August 2023",
  finishDate: "Present",
  yearsWorked: 1,
  isWorking: true,
  jobDescription: "A hybrid between the marketing team and the development team",
  companyLogoURL: "terminix-logo.png",
  companyBackgroundURL: "terminix-background.jpg",
  themeColor: "white"
}
const jobSoftdocs: Job = {
  jobID: 2,
  title: "Software Development Intern",
  company: "Softdocs",
  startDate: "May 2021",
  finishDate: "August 2021",
  yearsWorked: 1,
  isWorking: true,
  jobDescription: "A hybrid between the marketing team and the development team",
  companyLogoURL: "softdocs.png",
  companyBackgroundURL: "softdocs-background.jpg",
  themeColor: "purple"
}

export default function PastWork() {

  const[jobs, setJobs] = useState([jobTerminix]);
  const[isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`../data/jobdata.json`)
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[])


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
