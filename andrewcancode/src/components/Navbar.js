import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <header>
                <div className="senior-photo-container">
                    <img
                        src={require("../images/senior photo.jpg")}
                        className="senior-photo"
                        alt="CUTE BOY"
                    />
                </div>
                <nav>
                    <ul>
                        <Link to="/about">About Andrew</Link>
                        <Link to="/past-work">Past Work</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/styles">Styles</Link>
                        <Link to="/woodworking">Tools</Link>
                    </ul>
                </nav>
                <div className="download-resume-container">
                    <a
                        className="download-resume-button"
                        href={require("../images/Andrew Bernhardt Resume.pdf")}
                        target="_blank"
                    >
                        <img
                            src={require("../images/downloadbtn.png")}
                            className="download-resume-button"
                            alt="RESUME"
                        />
                    </a>
                </div>
            </header>
        </>
    )
}