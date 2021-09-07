import * as React from "react"
import Layout from '../components/layout'
import "../components/animations.css"
import { Link } from 'gatsby'

const IndexPage = () => {

  // can make span class blinkingCursor as a separate component
  return (
    <Layout>
      <p>Brandon Ngo</p>
      <p>Software Developer. Looking for 2021 internships.</p>{"\n"}
      <p>Check out my projects here <Link to=""></Link></p>{"\n"}
      <p>PS C:\brandon{"\>"} <span class="blinkingCursor">|</span></p>
    </Layout>
  )
}

export default IndexPage
