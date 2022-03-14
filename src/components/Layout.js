import React, { useEffect, useState } from "react";
import "./layout.css";
import Navbar from "./Navbar";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import "../components/animations.css";

const fullPage = {
  width: "100%",
  marginRight: "0px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10vh",
};

const smallPage = {
  border: "1.4px solid #909090",
  width: "99.5%",
  height: "99%",
};

const contentBox = {
  maxWidth: "1500px",
  height: "80%",
  width: "80%", // remember to use percentages for overarching containers
  border: "1.4px solid #909090",
};

const content = {
  marginTop: "3vh",
};

const scrollableSm = {
  overflowY: "auto",
  overflowX: "hidden",
  height: "85.8vh",
};

const scrollableLg = {
  overflowY: "auto",
  overflowX: "hidden",
  height: "68vh",
};

export default function Layout({ children }) {
  const bp = useBreakpoint();
  const [animation, setAnimation] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    setAnimation(!animation);
  }, [path]);

  return (
    <div style={bp.sm ? smallPage : fullPage}>
      <div style={bp.sm ? null : contentBox}>
        <div style={{ margin: "1vw" }}>
          <Navbar setPath={setPath} />
          <div style={content}>
            <p>Brandon Ngo</p>
            <div style={bp.sm ? scrollableSm : scrollableLg}>
              {children}
              <p>
                PS C:\brandon\{path}&gt;{" "}
                <span className="blinkingCursor">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
