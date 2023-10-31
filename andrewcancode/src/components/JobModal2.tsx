import React from 'react'

export default function JobModal({ job }) {
    return (
      <div className="modal">
        <div className="modal-header">
            <div className="modal-title">{job.title}</div>
            <img src={require(`../images/${job.companyLogoURL}`)} style={{backgroundColor: job.themeColor}} />
            <div className="close-modal">&times</div>
        </div>
        <div className="modal-body">
            {job.jobDescription}
        </div>
      </div>
    );
  }
