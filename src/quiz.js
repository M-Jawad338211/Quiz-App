// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestions = questions.length;

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz finished
      setCurrentQuestion(totalQuestions);
    }
  };

  return (
    <div>
      {currentQuestion < totalQuestions ? (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} totalQuestions={totalQuestions} />
      )}
    </div>
  );
};

export default Quiz;
