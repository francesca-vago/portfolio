import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import Hero from "./hero"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header-container">
      <Navbar />
      <Hero />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
