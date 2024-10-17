// src/components/Result.js
import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Your Score: {score} out of {totalQuestions}</h2>
    </div>
  );
};

export default Result;
