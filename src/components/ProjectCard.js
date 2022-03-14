import * as React from "react";
import Card from "./Card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const title = {
  margin: "0.2vh 0 0 0.2vw",
  textAlign: "left",
  fontFamily: "Consolas",
  fontSize: "", // set this px?
  color: "white",
};

const extLinks = {
  marginLeft: "auto",
};

const summ = {
  textAlign: "left", // can put to center
  color: "#dbdbdb",
};

const techContainer = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "2vw",
};

const item = {
  fontFamily: "Consolas",
  fontSize: "1.1rem",
  margin: "0",
  color: "#909090",
};

const ProjectCard = (props) => {
  return (
    <Card>
      {props.children}
      <div style={techContainer}>
        <h1 style={title}>{props.title}</h1>
        <a
          style={extLinks}
          target="_blank"
          rel="noopener noreferrer"
          href={props.links.git}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={props.links.deploy}>
          <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" color="white" />
        </a>
      </div>
      <p style={summ}>{props.summary}</p>
      <ul>
        {props.extras ? props.extras.map((str) => <li>{str}</li>) : ""}
      </ul>
      <div style={techContainer}>
        {props.tech.map((element) => (
          <h2 style={item}>{element}</h2>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
