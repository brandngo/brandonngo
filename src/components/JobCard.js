import * as React from 'react'

const container = {
  marginTop: "2vh",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "flex-start",
};

const title = {
  margin: "0 0",
  fontFamily: "Coda",
  color: "white",
  fontSize: "30px",
  fontWeight: "normal",
};

const JobCard = ({ data }) => {

  return (
    <div style={container}>
      <img style={{width: "50px", height: "50px"}} alt={data.company} src={data.logo}/>
      <div style={{marginLeft: "2vw", width: "60%"}}>
        <h1 style={title}>{data.job}</h1>
        <p style={{margin: "0.4vh 0"}}>{data.company} &#xB7; {data.jobType}</p>
        <p style={{color: "grey", margin: "0"}}>{`${data.month} ${data.year}`} &ndash; Present</p>
        <p style={{color: "grey", margin: "0"}}>{data.location}</p>
        <hr />
      </div>
    </div>
  )
}

export default JobCard