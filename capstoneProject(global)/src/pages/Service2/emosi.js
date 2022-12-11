import React, { useState } from "react";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Apakah Kamu sering merasa emosi?",
      options: [
        { id: 0, text: "sering", isCorrect: true },
        { id: 1, text: "tidak pernah", isCorrect: false },
        { id: 2, text: "jarang", isCorrect: false },
        { id: 3, text: "kadang-kadang", isCorrect: false },
      ],
    },
    {
      text: "Apakah Kamu bisa mengontrol emosi?",
      options: [
        { id: 0, text: "Bisa", isCorrect: false },
        { id: 1, text: "Saya Sering terpancing emosi", isCorrect: true },
        { id: 2, text: "tidak terlalu bisa", isCorrect: false },
        { id: 3, text: "Saya tidak pernah emosi", isCorrect: false },
      ],
    },
    {
      text: "Kenapa kamu sering merasa emosi",
      options: [
        { id: 0, text: "Kagum", isCorrect: true },
        { id: 1, text: "iri", isCorrect: true },
        { id: 2, text: "Benci", isCorrect: true },
        { id: 3, text: "Menyukai", isCorrect: true },
      ],
    },
    {
      text: "Bagaimana cara kamu mengungkapkan emosi?",
      options: [
        { id: 0, text: "Merasa bahagia", isCorrect: false },
        { id: 1, text: "Menangis", isCorrect: true },
        { id: 2, text: "Merasa Senang", isCorrect: false },
        { id: 3, text: "Lesu dan tidak bersemangat", isCorrect: true },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1 class="Judul">Quiz Kesehatan Mental</h1>
      {showResults ? (
        <div className="final-results">
          <h2>
          Terimakasih Telah mengerjakan Quiz jika anda masih bingung tentang
          kesehatan mental anda bisa membaca di blog kami
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-card">
          <h2 class="Judul">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul class="span1">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li class="span2"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
