import * as React from 'react'
import Card from './Card'

const titleStl = {
  margin: "0.2vh 0 0 0.2vw",
  textAlign: "left",
  fontFamily: "Consolas",
  fontSize: "", // set this px?
  color: "white",
}

const ExpCard = ({title, children, color}) => {

  return (
    <Card color={color}>
      <h1 style={titleStl}>{title}</h1>
      {children}
    </Card>
  )
}

export default ExpCard;