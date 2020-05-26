import React from 'react'
import { Link } from 'gatsby'

import "./hero.css"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Hi, I am Francesca.</h1>
                <h4 className="hero-subtitle">Web developer and designer.</h4>
                <a href="#contact" className="hero-link">Contact Me</a>
            </div>
        </div>
    )
}

export default Hero
