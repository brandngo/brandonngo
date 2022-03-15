import * as React from "react";
import Helmet from "react-helmet";

const resume = () => {
  return (
    <div style={{ width: "100%", height: "98vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="View my resume which includes basically everything on my portfolio."
        />
        <title>Brandon Ngo - Resume</title>
        <link rel="canonical" href="https://brandonngo.gatsbyjs.io/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <iframe
        title="resume"
        src={
          "https://drive.google.com/file/d/1m-xF-aRTFqsEzrNGWn7cPrc39PXfTc5R/preview"
        }
        alt="Brandon Ngo's resume"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default resume;
