import React from 'react'
import ProjectImg from "./project-img1"

import "./project-card.css"

const ProjectCard = ({title, text, wLink, gLink}) => {
    return (
        <div className="project-card-container">
            <div className="project-card-img">
                <ProjectImg />
            </div>
            <div className="project-card-content">
                <header className="project-card-title">
                    <h4>{title}</h4>
                </header>
                <div className="project-card-text">
                    <p>{text}</p>
                </div>
                <div className="project-card-links">
                    <a href={wLink}>- visit site</a>
                    <br/>
                    <a href={gLink}>- github</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
