import React from 'react'
import { Link } from 'gatsby'

import "./navbar.css"

const Navbar = () => {
    return (
            <nav className="navbar-container">
                      <div className="nav-logo">
                        <Link to="/">Francesca Vago</Link>
                    </div>
                <ul className="navbar-list">
                    <li className="nav-item">
                        <a href="#header">
                            .home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">
                            .about
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects">
                            .projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">
                            .contact
                        </a>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar