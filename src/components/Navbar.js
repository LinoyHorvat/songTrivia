import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link"> Home </Link>
      <Link to="/rules" className="navbar-link"> Rules </Link>
      <Link to="/game" className="navbar-link">Start Game </Link>
    </div>
  );
}
