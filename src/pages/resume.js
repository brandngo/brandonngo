import * as React from 'react'
import re from '../images/resume.pdf'

const resume = () => {
  return (
    <div style={{width: "100%", height: "98vh"}}>
      <iframe title="resume" src={re} style={{width: "100%", height: "100%"}} />
    </div>
  )
}

export default resume