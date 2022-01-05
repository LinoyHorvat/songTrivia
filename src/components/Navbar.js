import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <div className="navbar">
    <Link to="/"> Home </Link>
    <Link to="/rules"> Rules </Link>
    <Link to="/game"> Game </Link>
      </div>
  )
}
