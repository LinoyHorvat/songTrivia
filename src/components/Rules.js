import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Rules = () => {
  return (
    <div className="rules">
      <h1>Rules:</h1>
      <ul className="ul">
        <ol className="ol">
        ✔︎ Your goal is to guess the song title from the lyrics.
        </ol>
        <ol className="ol">
        ● The lyrics will appear for 60 seconds.
        </ol>
        <ol className="ol">
        ● Your goal is to submit as much songs
        names as you can by that time.
        </ol>
        <ol className="ol">● If you'll succeed you'll get 1 point.</ol>
      </ul>
      <div>
        <Link to={`/game`} className="link">
          click here to play >
        </Link>
      </div>
    </div>
  );
};

export default Rules;
