import React from 'react'
import { Link } from 'gatsby'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-title">
                <h1>Hi, I am Francesca</h1>
                <h4>Web developer and designer</h4>
                <Link to="/contact" className="btn">Contact Me</Link>
            </div>
        </div>
    )
}

export default Hero
