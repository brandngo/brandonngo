import * as React from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

const info = [
  {
    name: "interAction",
    summ: "A chat app designed to relieve the stress caused by the COVID-19 pandemic. Used Socket.io to implement voice and text communication features. Leverages Firebase, React, and Redux in this CRUD chat app. Submitted to cuHacking 2021.",
    links: {
      git: "https://github.com/brandngo/interACTION",
      deploy: "https://interactivess.web.app/",
    },
    tech: ["React", "Redux", "Firebase", "Socket.IO", "WebRTC"],
  },
  {
    name: "courseBuddy",
    summ: "A course planner for University of Waterloo students to plan their degree requirements. Features a drag and drop interface, login system, and user data sync.",
    links: {
      git: "https://github.com/brandngo/course-buddy",
      deploy: "",
    },
    tech: ["React", "Firebase", "Bootstrap/Material UI"],
  },
  {
    name: "cryptoTicker",
    summ: "A cryptocurrency price board that provides real-time updates. Keep tracks of personal cryptocurrency portfolios using API integrations",
    links: {
      git: "https://github.com/brandngo/cryptoticker",
      deploy: "",
    },
    tech: ["React", "Coinbase API", "Bootstrap", "Async/Await"],
  },
];

// add carousel later using props.children or put into project card
const Projects = () => {
  return (
    <Layout>
      {info.map((project) => <ProjectCard title={project.name} summary={project.summ} tech={project.tech} links={project.links}></ProjectCard>)}
    </Layout> 
  )
}

export default Projects