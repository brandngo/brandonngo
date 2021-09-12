import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'

const interActionSumm = "A chat app designed to relieve the stress caused by the COVID-19 pandemic. Used Socket.io to implement voice and text communication features. Leverages Firebase, React, and Redux in this CRUD chat app. Submitted to cuHacking 2021.";
const interActionLinks = {
  git: "https://github.com/brandngo/interACTION",
  deploy: "https://interactivess.web.app/",
};
const interActionTech = ["React", "Redux", "Firebase", "Socket.IO", "WebRTC"];

const courseBuddySumm = "A course planner for University of Waterloo students to plan their degree requirements. Features a drag and drop interface, login system, and user data sync.";
const courseBuddyLinks = {
  git: "https://github.com/brandngo/course-buddy",
  deploy: "",
};
const courseBuddyTech = ["React", "Firebase", "Bootstrap/Material UI"];

const cryptoTickerSumm = "A cryptocurrency price board that provides real-time updates. Keep tracks of personal cryptocurrency portfolios using API integrations";
const cryptoTickerLinks = {
  git: "https://github.com/brandngo/cryptoticker",
  deploy: "",
};
const cryptoTickerTech = ["React", "Coinbase API", "Bootstrap", "Async/Await"];

const Projects = () => {
  return (
    <Layout>
      <Card title="interAction" summary={interActionSumm} tech={interActionTech} links={interActionLinks}/>
      <Card title="Course Buddy" summary={courseBuddySumm} tech={courseBuddyTech} links={courseBuddyLinks}/>
      <Card title="CryptoTicker" summary={cryptoTickerSumm} tech={cryptoTickerTech} links={cryptoTickerLinks}/>
    </Layout> 
  )
}

export default Projects