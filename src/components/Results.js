import React from "react";

const Results = ({appScore}) => {
  appScore = JSON.parse(localStorage.getItem("score"))
  const text = () => {
    if (appScore >= 1) return <h1> great job 😀 you've earned {appScore} points</h1>
    else return <h1 style={{color: 'red'}}>You suck 😡 you've earned {appScore} points</h1>
  };
  return (
    <div className="results">
    {text()}
    {console.log(appScore)}
    </div> 
  )
};

export default Results;


