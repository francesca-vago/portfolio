import React from 'react'

import "./section.css"

const Section = ({title, children}) => {
    return (
        <div className="section-container">
            <h3 className="section-title">
                {title}
            </h3>
            <div className="section-content">
                {children}
            </div>
        </div>
    )
}

export default Section
