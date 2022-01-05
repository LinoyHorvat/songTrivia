import React from 'react'

const Results = ({score}) => {
  score = 1;
  const text = () => {
    if (score >= 3) return <h1> great job 😀 you've earned {score} points</h1>
    else return <h1 style={{color: 'red'}}>You suck 😡 you've earned {score} points</h1>
  }
  return (
    <div className="results">
      {text()}
    </div>
  )
}

export default Results
