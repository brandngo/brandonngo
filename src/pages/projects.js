import * as React from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

const info = {
  interAction: {
    summ: "A chat app designed to relieve the stress caused by the COVID-19 pandemic. Used Socket.io to implement voice and text communication features. Leverages Firebase, React, and Redux in this CRUD chat app. Submitted to cuHacking 2021.",
    links: {
      git: "https://github.com/brandngo/interACTION",
      deploy: "https://interactivess.web.app/",
    },
    tech: ["React", "Redux", "Firebase", "Socket.IO", "WebRTC"],
  },
  courseBuddy: {
    summ: "A course planner for University of Waterloo students to plan their degree requirements. Features a drag and drop interface, login system, and user data sync.",
    links: {
      git: "https://github.com/brandngo/course-buddy",
      deploy: "",
    },
    tech: ["React", "Firebase", "Bootstrap/Material UI"],
  },
  cryptoTicker: {
    summ: "A cryptocurrency price board that provides real-time updates. Keep tracks of personal cryptocurrency portfolios using API integrations",
    links: {
      git: "https://github.com/brandngo/cryptoticker",
      deploy: "",
    },
    tech: ["React", "Coinbase API", "Bootstrap", "Async/Await"],
  },
};
const Projects = () => {
  return (
    <Layout>
      <ProjectCard title="interAction" summary={info.interAction.summ} tech={info.interAction.tech} links={info.interAction.links}/>
      <ProjectCard title="Course Buddy" summary={info.courseBuddy.summ} tech={info.courseBuddy.tech} links={info.courseBuddy.links}/>
      <ProjectCard title="CryptoTicker" summary={info.cryptoTicker.summ} tech={info.cryptoTicker.tech} links={info.cryptoTicker.links}/>
      <ProjectCard title="interAction" summary={info.interAction.summ} tech={info.interAction.tech} links={info.interAction.links}/>
    </Layout> 
  )
}

export default Projects