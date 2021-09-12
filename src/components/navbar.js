import * as React from 'react'
import { Link } from 'gatsby'

const nav = {
  marginTop: "0.5vh",
  display: "flex",
  flexDirection: "row",
  width: "70%",
  height: "100%",
  gap: "2vw",
}

const navItems = {
  textDecoration: "none",
  
  fontFamily: "Consolas",
  fontSize: "2.5vh",
  color: "#909090",
}

const activeItem = {
  textUnderlineOffset: "8px",
  textDecorationThickness: "3px",
  textDecorationColor: "#C95D3B",

  fontFamily: "Consolas",
  fontSize: "2.5vh",
  color: "#909090",
}

const Navbar = () => {
  let path = window.location.pathname.split('/')[1];

  return (
    <nav style={nav}>
      <Link style={path === "contact" ? activeItem : navItems} to="/contact">CONTACT</Link>
      <Link style={path === "resume" ? activeItem : navItems} to="/resume">RESUME</Link>
      <Link style={path === "projects" ? activeItem : navItems} to="/projects">PROJECTS</Link>
      <Link style={path === "" ? activeItem : navItems} to="/">ABOUT</Link>
    </nav>
  )
}

export default Navbar