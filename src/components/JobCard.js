import * as React from "react";
const title = {
  margin: "0 0",
  fontFamily: "Coda",
  color: "white",
  fontSize: "30px",
  fontWeight: "normal",
};

const JobCard = ({ data }) => {
  return (
    <div>
      <div style={{ marginLeft: "2vw", width: "60%" }}>
        {data.logo}
        <h1 style={title}></h1>
        <p style={{ margin: "0.4vh 0" }}>
          {data.company} &#xB7; {data.job} {data.jobType}
        </p>
        <p style={{ color: "grey", margin: "0" }}>
          {`${data.month} ${data.year}`} &ndash; Present
        </p>
        <p style={{ color: "grey", margin: "0" }}>{data.location}</p>
        <hr />
      </div>
    </div>
  );
};

export default JobCard;
