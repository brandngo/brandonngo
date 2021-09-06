import React from "react"
import "./layout.css"
import Navbar from '../components/navbar'
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const fullPage = {
  width: "100%",
  height: "100%",
  marginRight: "0px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10vh"
}

const smallPage = {
  border: "1.4px solid #909090",
  width: "100%",
  height: "100%",
}

const contentBox = {
  maxWidth: "1500px",
  maxHeight: "800px",
  width: "80%",
  height: "700px",
  border: "1.4px solid #909090",
}

const header = {
  margin: "0 0.3rem",
}

const content = {
  margin: "3vh 0 0 1vw",
}

export default function Layout({ children }) {
  const bp = useBreakpoint();

  return (
    <div style={bp.sm ? smallPage : fullPage}>
      <div style={bp.sm ? null : contentBox}>
        <div style={header}>
          <Navbar />
          <div style={content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}