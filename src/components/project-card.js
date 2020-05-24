import React from 'react'

import "./project-card.css"

const ProjectCard = () => {
    return (
        <div className="project-card-container">
            <div className="project-card-img">
                <img></img>
            </div>
            <div className="project-card-content">
                <header className="project-card-title">
                    <h4>Project Title</h4>
                </header>
                <div className="project-card-text">
                    <p>Lorem ipsum...</p>
                </div>
                <div className="project-card-buttons">
                    <button className="project-card-btn">Github</button>
                    <button className="project-card-btn">See Live Site</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
