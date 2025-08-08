"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- IMPORTANT: Personalize these questions! ---
const questions = [
  {
    questionText: 'What month did we first start talking?',
    answerOptions: [
      { answerText: 'January', isCorrect: false },
      { answerText: 'March', isCorrect: true }, // Change this
      { answerText: 'June', isCorrect: false },
      { answerText: 'September', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the first movie we watched "together"?',
    answerOptions: [
      { answerText: 'Your Name', isCorrect: true }, // Change this
      { answerText: 'A Silent Voice', isCorrect: false },
      { answerText: 'Spider-Man', isCorrect: false },
      { answerText: 'The Notebook', isCorrect: false },
    ],
  },
  {
    questionText: 'What is my go-to comfort food?',
    answerOptions: [
      { answerText: 'Pizza', isCorrect: false },
      { answerText: 'Ice Cream', isCorrect: false },
      { answerText: 'Maggi', isCorrect: true }, // Change this
      { answerText: 'Burgers', isCorrect: false },
    ],
  },
  {
    questionText: 'What is one place we always talk about visiting?',
    answerOptions: [
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'The Mountains', isCorrect: true }, // Change this
      { answerText: 'The Beach', isCorrect: false },
      { answerText: 'Tokyo', isCorrect: false },
    ],
  },
];


const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="absolute top-5 left-5 z-20">
          <Link href="/celebrate" className="px-4 py-2 bg-white text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            ← Back
          </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 text-center">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              You scored {score} out of {questions.length}!
            </h2>
            <p className="text-lg text-gray-600">
              {score === questions.length ? "Perfect! You know me so well. 🥰" : "You did great! Thanks for playing."}
            </p>
            <p className="mt-6 font-bold text-2xl text-indigo-500">Happy Birthday!</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-2xl font-bold text-indigo-800">Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <h2 className="text-2xl text-gray-800 mb-8">{questions[currentQuestion].questionText}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswerClick(option.isCorrect)}
                  className="w-full p-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  {option.answerText}
                </motion.button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizPage;