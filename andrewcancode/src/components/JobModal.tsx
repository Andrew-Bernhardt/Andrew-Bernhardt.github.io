import React from 'react';
import './JobModal.css';

export default function JobModal({ job, closeModal, customClass}) {
    return (
      <div className={`modal modal-fade-in ${customClass}`}>
        <div className="modal-header">
            {/* <h5 className="modal-title">{job.title}</h5> */}
            <img src={require(`../images/${job.companyLogoURL}`)} style={{backgroundColor: job.backgroundColor}} />
            <button className="close-modal" onClick={closeModal}>x</button>
        </div>
        <div className="modal-body">
            <h2>{job.title}</h2>
            <h3>{job.startDate} - {job.finishDate}</h3>
            {job.jobDescription}

        </div>
      </div>
    );
  }
