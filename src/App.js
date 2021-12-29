import "./App.css";
import react, { useState, useEffect, useRef } from "react";
import santa from "./santa.png";
import shrimp from "./Shrimp.jpg";

function App() {
  const santaRef = useRef("");
  const shrimpRef = useRef("");

  const handleHover = (refItem) => {
    refItem.current.style.filter = "grayscale(0%)";
  };
  const handleLeave = (refItem) => {
    refItem.current.style.filter = "grayscale(100%)";
  };

  return (
    <div className="App">
      <img
        ref={santaRef}
        onMouseEnter={() => handleHover(santaRef)}
        onMouseLeave={() => handleLeave(santaRef)}
        src={santa}
        alt="santa"
        style={{ filter: "grayscale(100%)" }}
      />
      <img
        ref={shrimpRef}
        src={shrimp}
        onMouseEnter={() => handleHover(shrimpRef)}
        onMouseLeave={() => handleLeave(shrimpRef)}
        style={{ filter: "grayscale(100%)" }}
        alt="shrimp"
      />
    </div>
  );
}

export default App;
