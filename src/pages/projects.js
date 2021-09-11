import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'

const Projects = () => {
  return (
    <Layout>
      <Card title="Hello" summary="world" tech={["jquery", "dell", "react"]}/>
    </Layout>
  )
}

export default Projects