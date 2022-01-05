import React from "react";

const Results = () => {
  let score = JSON.parse(localStorage.getItem("score"))
  const text = () => {
    if (score >= 1) return <h1> great job 😀 you've earned {score} points</h1>
    else return <h1 style={{color: 'red'}}>You suck 😡 you've earned {score} points</h1>
  };
  return (
    <div className="results">
    {text()}
    </div> 
  )
};

export default Results;


