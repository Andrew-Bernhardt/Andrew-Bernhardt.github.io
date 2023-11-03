import React from 'react';
import './JobModal.css';

export default function JobModal({ job, closeModal, customClass}) {
    return (
      <div className={`modal ${customClass}`}>
        <div className="modal-header">
            <div className="modal-title">{job.title}</div>
            <img src={require(`../images/${job.companyLogoURL}`)} style={{backgroundColor: job.themeColor}} />
            <button className="close-modal" onClick={closeModal}>x</button>
        </div>
        <div className="modal-body">
            {job.jobDescription}
        </div>
      </div>
    );
  }
