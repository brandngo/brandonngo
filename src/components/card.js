import * as React from 'react'

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
  padding: "1.2vh 1vw",
  marginBottom: "1.5vh",
  backgroundColor: "#172a46",
}

const Card = (props) => {

  return (
    <div style={cardBgSmall}>
      {props.children}
    </div>
  )
}

export default Card;