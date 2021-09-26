import * as React from "react"
import Layout from '../components/Layout'
import "../components/animations.css"

const IndexPage = () => {

  return (
    <Layout>
      <p>Software Developer. Looking for 2021 internships.</p>{"\n"}
      <p>See my resume <a target="_blank" rel="noopener noreferrer" href="/resume">here</a></p>{"\n"}
      <p>PS C:\brandon&gt; <span class="blinkingCursor">|</span></p>
    </Layout>
  )
}

export default IndexPage
