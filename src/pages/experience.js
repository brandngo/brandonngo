import * as React from 'react'
import ExpCard from '../components/ExpCard'
import JobCard from '../components/JobCard'

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

// add new jobs on top of the last
const jobs = [
  {
    company: "BlackBerry",
    job: "Software Developer",
    jobType: "Intern",
    month: "Sep",
    year: "2021",
    location: "Waterloo, Ontario, Canada",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blackberry_Logo_without_wordmark.svg/1200px-Blackberry_Logo_without_wordmark.svg.png",
  },
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
    <div>
      <ExpCard title="Tech Stack" color="#787878">
        <div style={iconContainer}>
          {iconImgs.map(link => <img style={icon} src={link} alt="icon"/>)}
        </div>
      </ExpCard>
      <ExpCard title="Employment">
        {jobs.map(job => <JobCard data={job} />)}
      </ExpCard>
    </div>
  )
}

export default Experience