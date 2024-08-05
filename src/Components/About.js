import { useState, useEffect, useRef } from "react";
import "../styles.css";

const About = () => {
  const skillSet = [
    "Flutter",
    "Firebase",
    "Frontend",
    "APIs",
    "REST API",
    "React.js",
    "Javascript",
    "ELK",
    "Azure",
    "Java",
  ];

  const skillColors = {
    Flutter: "#42a5f5", // Light Blue
    Firebase: "#ffca28", // Yellow
    Frontend: "#4caf50", // Green
    APIs: "#ff7043", // Deep Orange
    "REST API": "#26a69a", // Teal
    "React.js": "#61dafb", // Cyan
    Javascript: "#fdd835", // Bright Yellow
    ELK: "#8e24aa", // Purple
    Azure: "#0078d4", // Azure Blue
    Java: "#f44336", // Red
  };

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isRemoving, setIsRemoving] = useState(false);
  const timeoutRef = useRef(null);

  const handleTypingEffect = () => {
    const currentWord = skillSet[currentWordIndex];
    const currentColor = skillColors[currentWord];

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, 150);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
          setIsRemoving(true);
        }, 150);
      }
    } else if (isRemoving) {
      if (currentText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, 150);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentWordIndex((currentWordIndex + 1) % skillSet.length);
          setCurrentText("");
          setIsTyping(true);
          setIsRemoving(false);
        }, 500);
      }
    }

    return currentColor;
  };

  useEffect(() => {
    const currentColor = handleTypingEffect();

    return () => clearTimeout(timeoutRef.current);
  }, [currentText, isTyping, isRemoving, currentWordIndex]);

  const typingContainer = {
    height: "1.5em",
    overflow: "hidden",
    color: skillColors[skillSet[currentWordIndex]],
  };

  return (
    <div className="card">
      <h2>Hello! I'm Shrutika Hilale</h2>
      <h4>
        A dynamic and driven B.Tech Computer Science graduate from the class of
        2024.
      </h4>
      <br />
      <span>
        With practical experience gained from an enriching internship at Bajaj
        Finserv Health, I am eager to bring my passion for innovative software
        development to a forward-thinking team.
      </span>
      <br /> <br />
      <h3 className="typing-container" style={typingContainer}>
        {currentText}
      </h3>
    </div>
  );
};

export default About;
