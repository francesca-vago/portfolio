import React from 'react'
import { Link } from 'gatsby'

import "./hero.css"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-title">
                <h1>Hi, I am Francesca</h1>
                <h4>Web developer and designer</h4>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </div>
    )
}

export default Hero
