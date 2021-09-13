import * as React from 'react'
import ExpCard from '../components/ExpCard';
import Layout from '../components/Layout'
import resume from '../images/resume.pdf'

const iconImgs = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
  "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
  "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://reactnative.dev/img/header_logo.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
];

const iconContainer = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "left",
  gap: "1vw",
}

const icon = {
  width: "60px",
  height: "60px",
}

const Experience = () => {
  return (
    <Layout>
      <ExpCard title="Tech Stack">
        <div style={iconContainer}>
          {iconImgs.map(link => <img style={icon} src={link} alt="icon"/>)}
        </div>
      </ExpCard>
      <ExpCard title="Employment">
        <h1>**put a linkedin style vertical line with descriptions on the sides</h1>
      </ExpCard>
    </Layout>
  )
}

export default Experience