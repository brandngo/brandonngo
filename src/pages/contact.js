import React from 'react'
import ContactForm from '../components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const container = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "2vw"
};

const Contact = () => {
  return (
    <div>
      <ContactForm />
      
      <div style={container}>
        <p>Connect with me here:</p>
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#2867B2" />
        <FontAwesomeIcon icon={faEnvelope} size="2x" color="#0072C6" />
      </div>
    </div>
  )
}

export default Contact