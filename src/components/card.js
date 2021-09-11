import * as React from 'react'
import Layout from './layout'

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
  padding: "0 0.6vw",
}

const title = {
  margin: "0.2vh 0 0 0.2vh",
  textAlign: "left",
  fontFamily: "Consolas",
  fontSize: "", // set this px?
  color: "white",
}

const summ = {
  textAlign: "left", // can put to center
}

const techContainer = {
  display: "flex",
  flexFlow: "row wrap",
}

const item = {
  margin: "0 2vw 0 0",
  fontFamily: "Consolas",
  fontSize: "1.1rem",
  color: "#909090",
}


const Card = (props) => {

  return (
    <div style={cardBgSmall}>
      {props.children}
      <h1 style={title}>{props.title}</h1>
      <p style={summ}>{props.summary}</p>
      <div style={techContainer}>
        {props.tech.map(element => <h2 style={item}>{element}</h2>)}
      </div>
      <img></img>
      <img></img>
    </div>
  )
}

export default Card;