import React from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { score } = location.state;

  return (
    <div>
      <h2>Result</h2>
      <p>Your score is: {score}</p>
    </div>
  );
}

export default Result;


