// src/App.js
import React, { useState } from 'react';
import Quiz from './quiz';
import questions from './data/questions';
import './App.css';
function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="App">
      <h1>Quiz Application</h1>
      {!quizStarted ? (
        <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
      ) : (
        <Quiz questions={questions} />
      )}
    </div>
  );
}

export default App;
