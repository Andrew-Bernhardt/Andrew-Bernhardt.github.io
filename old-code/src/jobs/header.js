import React from 'react';

export default function Header() {
    return (
        <div>
            <div className="senior-photo-container">
                <img src="../images/senior photo.jpg" className="senior-photo" alt="SENIOR PHOTO"/>
            </div>
            <nav>
                <ul>
                    <li><a className="link-page" href="../landing-pages/home.php">Past Work</a></li>
                    <li><a className="link-page" href="../landing-pages/about.php">About Andrew</a></li>
                    <li><a className="link-page" href="../jobs/jobs-grid.php">Past Work</a></li>
                    <li><a className="link-page" href="../landing-pages/skills.php">Skills</a></li>
                    <li><a className="link-page" href="../jobs/jobs-block.php">Projects</a></li>
                    <li><a className="link-page" href="../jobs/modal-test.php">Styles</a></li>
                    <li><a className="link-page" href="../woodworking/woodworking.php">Woodworking Tool</a></li>
                </ul>
            </nav>
            <div className="download-resume-container">
                <a className="download-resume-button" href="../data/Andrew Bernhardt Resume.pdf" target="_blank"><img src="../images/downloadbtn.png" className="download-resume-button" alt="RESUME"/></a>
            </div>
        </div>
    )
}
