import * as React from 'react'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardBgLarge = {
  maxWidth: "",
  maxHeight: "800px",
  width: "80%",
  height: "700px",
  border: "1.4px solid #909090",
}

const cardBgSmall = {
  maxWidth: "98%",
  maxHeight: "", // should only be used if two cards are shown at the same time for alignment
  border: "1.4px solid #909090",
  padding: "0 1vw 2vh 1vw",
  margin: "1.5vh 0",
  backgroundColor: "#172a46",
}

const title = {
  margin: "0.2vh 0 0 0.2vw",
  textAlign: "left",
  fontFamily: "Consolas",
  fontSize: "", // set this px?
  color: "white",
}

const extLinks = {
  marginLeft: "auto",
}

const summ = {
  textAlign: "left", // can put to center
  color: "#dbdbdb",
}

const techContainer = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "2vw"
}

const item = {
  fontFamily: "Consolas",
  fontSize: "1.1rem",
  margin: "0",
  color: "#909090",
}

const Card = (props) => {
  return (
    <div style={cardBgSmall}>
      {props.children}
      <div style={techContainer}>
        <h1 style={title}>{props.title}</h1>
        <a style={extLinks} target="_blank" href={props.links.git}>
          <FontAwesomeIcon icon={faGithub} size="2x" color="white"/>
        </a>
        <a target="_blank" href= {props.links.deploy}>
          <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" color="white"/>
        </a>
      </div>
      <p style={summ}>{props.summary}</p>
      <div style={techContainer}>
        {props.tech.map(element => <h2 style={item}>{element}</h2>)}
      </div>
    </div>
  )
}

export default Card;