import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header-container">
      <div className="header-logo">
        <Link to="/">FV</Link>
      </div>
      <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
