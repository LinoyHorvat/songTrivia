import React from 'react'
import { Link } from "react-router-dom";
import '../index.css';

const Rules = () => {
  const handelBackBtn = () => {
    window.history.back();
  }
  return (
    <div className="rules">
    <h1>Guess the song by lyrics rules</h1>
      <ul>
      <ol>The lyrics will show for 30 seconds. You'll need to submit the song name in the input by that time.</ol>
      <ol>If you'll succeed you'll get 1 point.</ol>
      </ul>
      <Link to={`/game`}>click here to play </Link>
      <button onClick={handelBackBtn}>Back</button>
    </div>
  )
}

export default Rules
