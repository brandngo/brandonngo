import React from "react"
import "./layout.css"
import Navbar from './Navbar'
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const fullPage = {
  width: "100%",
  marginRight: "0px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10vh"
}

const smallPage = {
  border: "1.4px solid #909090",
  width: "99.5%",
  height: "99%",
}

const contentBox = {
  maxWidth: "1500px",
  height: "80%",
  width: "80%", // remember to use percentages for overarching containers
  border: "1.4px solid #909090",
}

const content = {
  marginTop: "3vh",
}

const scrollableSm = {
  overflowY: "auto",
  overflowX: "hidden",
  height: "85.8vh",
}

const scrollableLg = {
  overflowY: "auto",
  overflowX: "hidden",
  height: "68vh",
}

export default function Layout({ children }) {
  const bp = useBreakpoint();

  return (
    <div style={bp.sm ? smallPage : fullPage}>
      <div style={bp.sm ? null : contentBox}>
        <div style={{margin: "1vw"}}>
          <Navbar />
          <div style={content}>
            <p>Brandon Ngo</p>
            <div style={bp.sm ? scrollableSm : scrollableLg}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
