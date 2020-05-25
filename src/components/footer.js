import React from 'react'

import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer-container">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    )
}

export default Footer
