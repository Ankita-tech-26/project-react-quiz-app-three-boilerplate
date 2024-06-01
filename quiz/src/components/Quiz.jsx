import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const questions = [
  {
    question: 'What is 2 + 2?',
    options: [
      { text: '3', isCorrect: false },
      { text: '4', isCorrect: true },
      { text: '5', isCorrect: false },
    ],
  },
  // Add more questions here
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const history = useHistory();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      alert('Correct answer');
    } else {
      alert('Wrong answer');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      history.push('/result', { score });
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      <div>
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;



