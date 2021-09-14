import * as React from 'react'
import Card from './Card'

const title = {
  margin: "0.2vh 0 0 0.2vw",
  textAlign: "left",
  fontFamily: "Consolas",
  fontSize: "", // set this px?
  color: "white",
}

const ExpCard = (props) => {

  return (
    <Card>
      <h1 style={title}>{props.title}</h1>
      {props.children}
    </Card>
  )
}

export default ExpCard;