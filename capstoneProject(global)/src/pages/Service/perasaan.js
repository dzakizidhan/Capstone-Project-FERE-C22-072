import React, { useState } from "react";

function ServicePerasaan() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
        text: "Bagaimana perasaan mu hari ini?",
        options: [
          { id: 0, text: "Kesal", isCorrect: false },
          { id: 1, text: "Bingung", isCorrect: false },
          { id: 2, text: "Sedih", isCorrect: false },
          { id: 3, text: "Senang", isCorrect: true },
        ],
      },
      {
        text: "Apakah kamu punya masalah kesalahan mental?",
        options: [
          { id: 0, text: "Saya merasa akhir-akhir ini sedih terus", isCorrect: true },
          { id: 1, text: "Saya merasa tenang", isCorrect: false },
          { id: 2, text: "Saya rasa tidak", isCorrect: false },
          { id: 3, text: "Saya merasa bahagia", isCorrect: false },
        ],
      },
      {
        text: "Kamu mencintai kehidupan?",
        options: [
          { id: 0, text: "Saya tidak peduli", isCorrect: true },
          { id: 1, text: "Ya, saya mencintai", isCorrect: false },
          { id: 2, text: "Biasa saja", isCorrect: false },
          { id: 3, text: "Saya terlalu menikmati kehidupan", isCorrect: false },
        ],
      },
      {
        text: "Bagaimana orang lain mendeskripsikan dirimu?",
        options: [
          { id: 0, text: "Bahagia", isCorrect: false },
          { id: 1, text: "Pemurung", isCorrect: true },
          { id: 2, text: "Ceria", isCorrect: false },
          { id: 3, text: "Selalu tersenyum", isCorrect: false },
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
    <div className="App services">
      <h1 class="text-center">Quiz Kesehatan Mental</h1>
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

export default ServicePerasaan;
