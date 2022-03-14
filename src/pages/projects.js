import * as React from "react";
import ProjectCard from "../components/ProjectCard";

const info = [
  {
    name: "WaterlooSublets",
    summ: "Full stack app that allows users to find sublets and leases for student properties around Waterloo",
    links: {
      git: "https://github.com/brandngo/interACTION",
      deploy: "https://interactivess.web.app/",
    },
    tech: ["MongoDB", "Express", "Node.js", "React", "Redux"],
    extras: [
      "Used MERN stack to develop platform with proprietary authentication and quick SPA performance",
      "Implemented WebSocket for real-time chat and bidding system",
    ],
  },
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
    name: "Course Buddy",
    summ: "A course planner for University of Waterloo students to plan their degree requirements. Features a drag and drop interface, login system, and user data sync.",
    links: {
      git: "https://github.com/brandngo/course-buddy",
      deploy: "",
    },
    tech: ["React", "Firebase", "Bootstrap/Material UI"],
  },
  {
    name: "CryptoTicker",
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
    <div>
      {info.map((project) => (
        <ProjectCard
          title={project.name}
          summary={project.summ}
          tech={project.tech}
          links={project.links}
          extras={project.extras}
        ></ProjectCard>
      ))}
    </div>
  );
};

export default Projects;
