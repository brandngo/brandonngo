import * as React from "react"
import Layout from '../components/Layout'
import "../components/animations.css"
//import { Link } from 'gatsby'

const IndexPage = () => {

  // <Link to=""></Link>
  // can make span class blinkingCursor as a separate component
  return (
    <Layout>
      <p>Software Developer. Looking for 2021 internships.</p>{"\n"}
      <p>Check out my projects here </p>{"\n"}
      <p>PS C:\brandon&gt; <span class="blinkingCursor">|</span></p>
    </Layout>
  )
}

export default IndexPage
