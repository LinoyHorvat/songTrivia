import React from 'react'
import { useState, useEffect } from "react";
import Lyric from "./Lyric"
// import Countdown from 'react-countdown';


export default function Game() {
  const songsArr = ['we%20will%20rock%20you', 'frozen', 'Beat%20It','Smells%20Like%20Teen%20Spirit','Billie%20Jean']
  const artistsArr =['queen', 'madonna','Michael%20Jackson','Nirvana','Michael%20Jackson']
  let random = Math.floor(songsArr.length*Math.random());
  const [randomNum, setRandomNum] = useState(random);
  const [inputValue, setInputValue] = useState('')
  const [score, setScore] = useState(0);
  const [counter, setCounter] = React.useState(25);
  const [timeOver, setTimeOver] = useState(false)
  
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0){
      createLyrics()
      setTimeOver(true)
    }
  }, [counter]);
  
  useEffect( () => {
    console.log(songsArr[randomNum].split('%20').join(' '));
    randomChoice();
    setTimeOver(false)
    // setCounter(25)
    if(score === 3) window.history.back();
  },[timeOver])
  
  const randomChoice = () => {
    setRandomNum(random)
  }
  const handelBackBtn = () => {
    window.history.back();
  }
  const handelInputChange = (val) => {
    console.log(inputValue);
    setInputValue(val)
    if (inputValue == songsArr[randomNum].split('%20').join(' ').toLowerCase()) {
      console.log('correct');
      setScore(score+1)
    }
  }
  const createLyrics =() => {
    console.log(songsArr[0].split('%20').join(' ').toLowerCase())
    return <Lyric songName = {songsArr[randomNum]} artistName = {artistsArr[randomNum]}/>
  }


  return (
    <div className = "game-container">
    <div>Countdown: {counter}</div>
    <input placeholder="Guess The Song Name" type="text" value = {inputValue} onChange={event => handelInputChange(event.target.value)}/>
    <button className="score">score: {score}</button>
    {createLyrics()}
    <button onClick={handelBackBtn}>Back</button>
    </div>
  )
}
