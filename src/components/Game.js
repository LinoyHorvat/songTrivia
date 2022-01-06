import React from "react";
import { useState, useEffect } from "react";
import Lyric from "./Lyric";
import { useHistory } from "react-router-dom";
import "../index.css";

export default function Game() {
  const songsArr = [
    "we%20will%20rock%20you",
    "frozen",
    "Beat%20It",
    "Smells%20Like%20Teen%20Spirit",
    "Billie%20Jean",
    "let%20it%20be",
    "help",
    "hey%20jude",
    "come%20together",
    "yesterday",
    "i%20want%20to%20break%20free",
    "bohemian%20rhapsody",
    "crazy%20little%20thing%20called%20love",
    "Like%20a%20Prayer",
    "Every%20Breath%20You%20Take",
    "Eye%20of%20the%20Tiger",
    "Africa",
    "Sometimes",
    "uptown%20girl"
  ];
  const artistsArr = [
    "queen",
    "madonna",
    "Michael%20Jackson",
    "Nirvana",
    "Michael%20Jackson",
    "the%20beatles",
    "the%20beatles",
    "the%20beatles",
    "the%20beatles",
    "the%20beatles",
    "queen",
    "queen",
    "queen",
    "Madonna",
    "Police",
    "Survivor",
    "Toto",
    "Britney%20Spears",
    "billy%20joel"
  ];
  // let random = Math.floor(songsArr.length * Math.random());
  let random = 18;
  const [randomNum, setRandomNum] = useState(random);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  localStorage.setItem("score", JSON.stringify(score));
  const history = useHistory();
  const [style, setStyle] = useState({ color: "rgba(47, 247, 7, 0.886)" });

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter <= 5) {
      setStyle({ color: "red" });
    }
    if (counter === 0) {
      history.push("/results");
    }
  }, [counter]);

  useEffect(() => {
    console.log(songsArr[randomNum].split("%20").join(" "));
    randomChoice();
  }, [score]);

  const randomChoice = () => {
    setRandomNum(random);
  };
  const handelBackBtn = () => {
    window.history.back();
  };
  const handelInputChange = (val) => {
    console.log("val");
    setInputValue(val);
  };
  const createLyrics = () => {
    return (
      <Lyric
        songName={songsArr[randomNum]}
        artistName={artistsArr[randomNum]}
      />
    );
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (
        inputValue.toLowerCase() == songsArr[randomNum].split("%20").join(" ").toLowerCase()
      ) {
        setScore((score) => score + 1);
        localStorage.setItem("score", JSON.stringify(score + 1));
        setInputValue("");
      }
    }
  };
  const handelSubmit = () => {
    console.log(inputValue.toLowerCase());
    if (
      inputValue.toLowerCase() == songsArr[randomNum].split("%20").join(" ").toLowerCase()
    ) {
      setScore((score) => score + 1);
      localStorage.setItem("score", JSON.stringify(score + 1));
      setInputValue("");
    }
  };

  return (
    <div className="game">
      <div className="countdown" style={style}>
        Countdown: {counter}
      </div>
      <div className="input-container">
        <input
          className="input"
          placeholder="Guess The Song Name"
          type="text"
          value={inputValue}
          onChange={(event) => handelInputChange(event.target.value)}
          onKeyDown={(event) => handleKeyDown(event)}
        />
        <button className="submit" onClick={handelSubmit}>
          Submit
        </button>
      </div>
      <button className="score">score: {score}</button>
      {createLyrics()}
      <button onClick={handelBackBtn}>Back</button>
    </div>
  );
}
