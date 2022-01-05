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
  ];
  let random = Math.floor(songsArr.length * Math.random());
  const [randomNum, setRandomNum] = useState(random);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(10);
  localStorage.setItem("score", JSON.stringify(score));
  const history = useHistory();
  const [style, setStyle] = useState({color: 'rgba(47, 247, 7, 0.886)'})



  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter <= 5) {
      setStyle({color: "red"}) 
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
        inputValue == songsArr[randomNum].split("%20").join(" ").toLowerCase()
      ) {
        setScore((score) => score + 1);
        localStorage.setItem("score", JSON.stringify(score + 1));
        setInputValue("");
      }
    }
  };

  return (
    <div className="game">
      <div className="countdown" style={style}>Countdown: {counter}</div>
      <input
        className="input"
        placeholder="Guess The Song Name"
        type="text"
        value={inputValue}
        onChange={(event) => handelInputChange(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
      <button className="score">score: {score}</button>
      {createLyrics()}
      <button onClick={handelBackBtn}>Back</button>
    </div>
  );
}
