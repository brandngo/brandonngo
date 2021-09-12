import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'

const courseBuddySumm = "A chat app designed to relieve the stress caused by the COVID-19 pandemic. Used Socket.io to implement voice and text communication features. Leverages Firebase, React, and Redux in this CRUD chat app. Submitted to cuHacking 2021.";
const courseBuddyLinks = {
  git: "https://github.com/brandngo/interACTION",
  deploy: "https://interactivess.web.app/",
}

const Projects = () => {
  return (
    <Layout>
      <Card title="Course Buddy" summary={courseBuddySumm} tech={["jquery", "dell", "react"]} links={courseBuddyLinks}/>
    </Layout>
  )
}

export default Projects