import React from 'react'
import { Link } from "react-router-dom";


export default function HomePage() {

  return (
    <div className="homepage">
      <h1>This is a Song Trivia Game</h1>
      <h2>If you like listening to and enjoying songs, this quiz is for you.</h2>
      <div className="link"><Link to={`/rules`}>click here to play </Link></div>
      </div>
  )
}
