import React from 'react'

const Section = ({title, children}) => {
    return (
        <div className="section">
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
