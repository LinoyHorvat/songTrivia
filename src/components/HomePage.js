import React from 'react'
import { Link } from "react-router-dom";


export default function HomePage() {

  return (
    <div className="homepage">
      <h1>Trivia Game</h1>
      <h2>If you like listening to music and enjoying lyrics, this quiz is for you!</h2>
      <div className="link"><Link to={`/rules`} className="link">click here to start ></Link></div>
      </div>
  )
}
