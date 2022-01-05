import React from "react";
import { useState, useEffect } from "react";
import Lyric from "./Lyric";
import Results from "./Results";
import { browserHistory, Redirect } from "react-router-dom";


export default function Game({setAppScore, appScore}) {
  const songsArr = [
    "we%20will%20rock%20you",
    "frozen",
    "Beat%20It",
    "Smells%20Like%20Teen%20Spirit",
    "Billie%20Jean",
  ];
  const artistsArr = [
    "queen",
    "madonna",
    "Michael%20Jackson",
    "Nirvana",
    "Michael%20Jackson",
  ];
  let random = Math.floor(songsArr.length * Math.random());
  const [randomNum, setRandomNum] = useState(random);
  const [inputValue, setInputValue] = useState("");
  // const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(1);
  // const [timeOver, setTimeOver] = useState(false);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      // window.location.href = "/results";
      return  <Redirect to='/results'  />      
      // browserHistory.push("/results");
    }
  }, [counter]);

  useEffect(() => {
    console.log(songsArr[randomNum].split("%20").join(" "));
    randomChoice();
    // setTimeOver(false);
    // setCounter(60);
  }, [appScore]);

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
        // setScore(appScore + 1);
        setAppScore((appScore) => appScore + 1);
        setInputValue("");
      }
    }
  };

  return (
    <div className="game">
      <div className="countdown">Countdown: {counter}</div>
      <input
        placeholder="Guess The Song Name"
        type="text"
        value={inputValue}
        onChange={(event) => handelInputChange(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
      <button className="score">score: {appScore}</button>
      {createLyrics()}
      <button onClick={handelBackBtn}>Back</button>
    </div>
  );
}
