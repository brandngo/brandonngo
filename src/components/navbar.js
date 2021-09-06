import * as React from 'react'
import { Link } from 'gatsby'

const nav = {
  marginTop: "0.5vh",
  display: "flex",
  flexDirection: "row",
  width: "70%",
  height: "100%",
}

const navItems = {
  marginRight: "2vw",
  textDecoration: "none",
  
  fontFamily: "Consolas",
  fontSize: "2.5vh",
  color: "#909090",
}

const activeItem = {
  marginRight: "2vw",
  textUnderlineOffset: "8px",
  textDecorationThickness: "3px",
  textDecorationColor: "#C95D3B",

  fontFamily: "Consolas",
  fontSize: "2.5vh",
  color: "#909090",
}

// may be neccessary to properly space last anchor (note margin=0px)
const lastNavItem = {
  flex: "1 1 auto",
  textAlign: "center",
  textDecoration: "none",
}

const Navbar = () => {
  return (
    <nav style={nav}>
      <Link style={navItems} to="/contact">CONTACT</Link>
      <Link style={navItems} to="/resume">RESUME</Link>
      <Link style={navItems} to="/projects">PROJECTS</Link>
      <Link style={activeItem} to="/">ABOUT</Link>
    </nav>
  )
}

export default Navbar