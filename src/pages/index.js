import * as React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'

// styles

// markup
const IndexPage = () => {

  return (
    <Layout>
      <p>Brandon Ngo</p>
      <p>Software Developer. Looking for 2021 internships.</p>{"\n"}
      <p>Check out my projects here <Link to=""></Link></p>{"\n"}
    </Layout>
  )
}

export default IndexPage
