import React, { useState, useEffect } from "react";
import "../styles.css";

const Timeline = () => {
  const [circleSize, setCircleSize] = useState(32);
  const [circleMarginRight, setCircleMarginRight] = useState("2rem");
  const [contentFontSize, setContentFontSize] = useState("1rem");
  const [otherContentFontSize, setOtherContentFontSize] = useState("0.8rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCircleSize(24);
        setCircleMarginRight("1rem");
        setContentFontSize("0.875rem");
        setOtherContentFontSize("0.5rem");
      } else {
        setCircleSize(32);
        setCircleMarginRight("2rem");
        setContentFontSize("1rem");
        setOtherContentFontSize("0.8rem");
      }
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timelineItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: `${circleSize / 2 + 1}px`,
    position: "relative",
    width: "100%",
  };

  const circleStyle = (isActive) => ({
    backgroundColor: isActive ? "#bb86fc" : "grey",
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: "50%",
    marginRight: circleMarginRight,
    position: "relative",
    zIndex: 1,
  });

  const contentStyle = {
    fontSize: contentFontSize,
    color: "#ffffff",
  };

  const otherContentStyle = {
    fontSize: otherContentFontSize,
    color: "#ffffff",
    marginTop: "2px",
  };

  const connectingLineStyle = {
    content: '""',
    position: "absolute",
    width: "2px",
    height: "100%",
    backgroundColor: "#ffffff",
    zIndex: 0,
    top: `${circleSize}px`,
    left: `${circleSize / 2 - 1}px`,
  };

  const titleExp = [
    {
      content: "Associate SDET at Bajaj Finserv Health",
      otherContent: "Current",
      isActive: true,
    },
    {
      content: "Intern at Bajaj Finserv Health",
      otherContent: "July'23 - June'24",
      isActive: false,
    },
    {
      content: "Flutter Developer at Innobytes",
      otherContent: "Final year Project Sponsorship (Jan'24 - April'24)",
      isActive: false,
    },
  ];

  return (
    <div>
      <h3>Experience</h3>

      <div className="timeline card">

        {titleExp.map((exp, index) => (
          <div key={index} style={timelineItemStyle}>
            {index < titleExp.length - 1 ? (
              <div style={connectingLineStyle}></div>
            ) : null}
            <div style={circleStyle(exp.isActive)}></div>
            <div className="display-flex-left">
              <div style={contentStyle}>{exp.content}</div>
              <div style={otherContentStyle}>{exp.otherContent}</div>
            </div>
          </div>
        ))}
        
      </div>

    </div>
  );
};

export default Timeline;
