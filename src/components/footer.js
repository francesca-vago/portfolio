import React from 'react'

import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="social-links">
                <a href="https://linkedin.com/in/francesca-vago">LinkedIn</a>
                <a href="https://github.com/francesca-vago">Github</a>
                <a href="https://dribbble.com/Franci_Vago">Dribble</a>
            </div>
            <div className="copyrights">
                © {new Date().getFullYear()}, Francesca Vago. All Rights Reserved.
                <br/>
                Built with ❤️ by Francesca Vago.
            </div>
        </footer>
    )
}

export default Footer
