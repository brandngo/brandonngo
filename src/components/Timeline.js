import * as React from 'react'
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lineSVG from '../images/timeline.svg';

const jobContainer = {
  stroke: "black",
}

const Timeline = () => {

  return (
    <div style={jobContainer}>
      <FontAwesomeIcon icon={faBlackberry} size="2x" color="black"/>
      <img src={lineSVG} style={{width: "40px", height: "100px"}}/>
    </div>
  );
}

export default Timeline