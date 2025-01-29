

// import React, { useState, useEffect } from "react";
// import Timer from "../components/Timer";
// import Question from "../components/Question";
// import QuestionPalette from "../components/QuestionPalette";
// import { useNavigate } from "react-router-dom";
// import "./MockTestSelection.css"
// import questionData from "../json/examquestion.json"; // Import questions JSON file

// const MockTestSelection = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [markedForReview, setMarkedForReview] = useState([]);
//   const [timeRemaining, setTimeRemaining] = useState(1300); // 60 minutes in seconds

//   useEffect(() => {
//     // Load questions from JSON file
//     setQuestions(questionData);
//     setAnswers(Array(questionData.length).fill(null)); // Initialize answers array

//     // Start timer
//     const timerInterval = setInterval(() => {
//       setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0));
//     }, 1000);

//     return () => clearInterval(timerInterval); // Cleanup timer
//   }, []);

//   const handleAnswerChange = (questionIndex, answer) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[questionIndex] = answer;
//     setAnswers(updatedAnswers);
//   };

//   const handleMarkForReview = (questionIndex) => {
//     const updatedMarkedForReview = [...markedForReview];
//     if (markedForReview.includes(questionIndex)) {
//       updatedMarkedForReview.splice(updatedMarkedForReview.indexOf(questionIndex), 1);
//     } else {
//       updatedMarkedForReview.push(questionIndex);
//     }
//     setMarkedForReview(updatedMarkedForReview);
//   };

//   const handleUnmark = (questionIndex) => {
//     const updatedAnswers = [...answers];
//     const updatedMarkedForReview = [...markedForReview];

//     if (updatedAnswers[questionIndex] !== null) {
//       updatedAnswers[questionIndex] = null; // Reset answer
//     }

//     if (updatedMarkedForReview.includes(questionIndex)) {
//       updatedMarkedForReview.splice(updatedMarkedForReview.indexOf(questionIndex), 1); // Remove from review list
//     }

//     setAnswers(updatedAnswers);
//     setMarkedForReview(updatedMarkedForReview);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = () => {
//     const score = questions.reduce((total, question, index) => {
//       if (answers[index] === question.correctAnswer) {
//         return total + 1;
//       }
//       return total;
//     }, 0);

//     // Navigate to the results page, passing the score and totalQuestions as state
//     navigate("/results", { state: { score, totalQuestions: questions.length } });
//   };

//   return (
    
//       <div className="test-container">
//         <Timer timeRemaining={timeRemaining} />
//         <QuestionPalette
//           questions={questions}
//           currentQuestion={currentQuestion}
//           answers={answers}
//           markedForReview={markedForReview}
//           onSelectQuestion={setCurrentQuestion}
//           onUnmark={handleUnmark}
//         />
//         {questions.length > 0 ? (
//           <Question
//             question={questions[currentQuestion]}
//             onChange={(answer) => handleAnswerChange(currentQuestion, answer)}
//             onMarkForReview={() => handleMarkForReview(currentQuestion)}
//             isMarkedForReview={markedForReview.includes(currentQuestion)}
//             selectedAnswer={answers[currentQuestion]}
//           />
//         ) : (
//           <p>Loading questions...</p>
//         )}
//         <div className="navigation-buttons">
//           <button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
//             Previous
//           </button>
//           <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
//             Next
//           </button>
//         </div>
//         <button onClick={handleSubmit} disabled={questions.length === 0 || timeRemaining <= 0}>
//           Submit
//         </button>
//       </div>
//   );
// };

// export default MockTestSelection;



// import React, { useState, useEffect } from "react";
// import Timer from "../components/Timer";
// import Question from "../components/Question";
// import QuestionPalette from "../components/QuestionPalette";
// import { useNavigate } from "react-router-dom";
// import "./MockTestSelection.css";
// import questionData from "../json/examquestion.json"; // Import questions JSON file

// const MockTestSelection = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [markedForReview, setMarkedForReview] = useState([]);
//   const [timeRemaining, setTimeRemaining] = useState(1800); // 60 minutes in seconds

//   useEffect(() => {
//     setQuestions(questionData);
//     setAnswers(Array(questionData.length).fill(null)); // Initialize answers array

//     const timerInterval = setInterval(() => {
//       setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0));
//     }, 1000);

//     return () => clearInterval(timerInterval); // Cleanup timer
//   }, []);

//   const handleAnswerChange = (questionIndex, answer) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[questionIndex] = answer;
//     setAnswers(updatedAnswers);
//   };

//   const handleMarkForReview = (questionIndex) => {
//     const updatedMarkedForReview = [...markedForReview];
//     if (markedForReview.includes(questionIndex)) {
//       updatedMarkedForReview.splice(updatedMarkedForReview.indexOf(questionIndex), 1);
//     } else {
//       updatedMarkedForReview.push(questionIndex);
//     }
//     setMarkedForReview(updatedMarkedForReview);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = () => {
//     const score = questions.reduce((total, question, index) => {
//       if (answers[index] === question.correctAnswer) {
//         return total + 1;
//       }
//       return total;
//     }, 0);

//     navigate("/results", { state: { score, totalQuestions: questions.length } });
//   };

//   return (
//     <div className="mock-test-container">
//       <div className="content-section">
//         <div className="question-area">
//           {questions.length > 0 ? (
//             <Question
//               question={questions[currentQuestion]}
//               onChange={(answer) => handleAnswerChange(currentQuestion, answer)}
//               onMarkForReview={() => handleMarkForReview(currentQuestion)}
//               isMarkedForReview={markedForReview.includes(currentQuestion)}
//               selectedAnswer={answers[currentQuestion]}
//             />
//           ) : (
//             <p>Loading questions...</p>
//           )}
//         </div>
//         <div className="navigation-buttons">
//           <button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
//             Previous
//           </button>
//           <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
//             Next
//           </button>
//           <button onClick={handleSubmit} disabled={questions.length === 0 || timeRemaining <= 0}>
//             Submit
//           </button>
//         </div>
//       </div>
//       <div className="timer-section">
//         <Timer timeRemaining={timeRemaining} />
//         <QuestionPalette
//           questions={questions}
//           currentQuestion={currentQuestion}
//           answers={answers}
//           markedForReview={markedForReview}
//           onSelectQuestion={setCurrentQuestion}
//         />
//       </div>
//     </div>
//   );
// };

// export default MockTestSelection;



// import React, { useState, useEffect } from "react";
// import Timer from "../components/Timer";
// import Question from "../components/Question";
// import QuestionPalette from "../components/QuestionPalette";
// import { useNavigate } from "react-router-dom";
// import "./MockTestSelection.css";
// import questionData from "../json/examquestion.json"; // Import questions JSON file

// const MockTestSelection = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [markedForReview, setMarkedForReview] = useState([]);
//   const [timeRemaining, setTimeRemaining] = useState(10); // 10 seconds for testing

//   useEffect(() => {
//     setQuestions(questionData);
//     setAnswers(Array(questionData.length).fill(null)); // Initialize answers array

//     const timerInterval = setInterval(() => {
//       setTimeRemaining((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timerInterval);
//           handleSubmit(); // Trigger submission when time runs out
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timerInterval); // Cleanup timer
//   }, []);

//   const handleAnswerChange = (questionIndex, answer) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[questionIndex] = answer;
//     setAnswers(updatedAnswers);
//   };

//   const handleMarkForReview = (questionIndex) => {
//     const updatedMarkedForReview = [...markedForReview];
//     if (markedForReview.includes(questionIndex)) {
//       updatedMarkedForReview.splice(updatedMarkedForReview.indexOf(questionIndex), 1);
//     } else {
//       updatedMarkedForReview.push(questionIndex);
//     }
//     setMarkedForReview(updatedMarkedForReview);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = () => {
//     const score = questions.reduce((total, question, index) => {
//       if (answers[index] === question.correctAnswer) {
//         return total + 1;
//       }
//       return total;
//     }, 0);

//     navigate("/results", { state: { score, totalQuestions: questions.length } });
//   };

//   return (
//     <div className="mock-test-container">
//       <div className="content-section">
//         <div className="question-area">
//           {questions.length > 0 ? (
//             <Question
//               question={questions[currentQuestion]}
//               onChange={(answer) => handleAnswerChange(currentQuestion, answer)}
//               onMarkForReview={() => handleMarkForReview(currentQuestion)}
//               isMarkedForReview={markedForReview.includes(currentQuestion)}
//               selectedAnswer={answers[currentQuestion]}
//             />
//           ) : (
//             <p>Loading questions...</p>
//           )}
//         </div>
//         <div className="navigation-buttons">
//           <button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
//             Previous
//           </button>
//           <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
//             Next
//           </button>
//           <button onClick={handleSubmit} disabled={questions.length === 0 || timeRemaining <= 0}>
//             Submit
//           </button>
//         </div>
//       </div>
//       <div className="timer-section">
//         <Timer timeRemaining={timeRemaining} />
//         <QuestionPalette
//           questions={questions}
//           currentQuestion={currentQuestion}
//           answers={answers}
//           markedForReview={markedForReview}
//           onSelectQuestion={setCurrentQuestion}
//         />
//       </div>
//     </div>
//   );
// };

// export default MockTestSelection;



// import React, { useState, useEffect } from "react";
// import Timer from "../components/Timer";
// import Question from "../components/Question";
// import QuestionPalette from "../components/QuestionPalette";
// import { useNavigate } from "react-router-dom";
// import "./MockTestSelection.css";
// import questionData from "../json/examquestion.json"; // Import questions JSON file

// const MockTestSelection = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [markedForReview, setMarkedForReview] = useState([]);
//   const [timeRemaining, setTimeRemaining] = useState(10); // 10 seconds for testing

//   useEffect(() => {
//     if (questionData.length > 0) {
//       setQuestions(questionData);
//       setAnswers(new Array(questionData.length).fill(null)); // Initialize answers array
//     }

//     const timerInterval = setInterval(() => {
//       setTimeRemaining((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timerInterval);
//           handleSubmit(); // Trigger submission when time runs out
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timerInterval); // Cleanup timer
//   }, []);

//   const handleAnswerChange = (questionIndex, answer) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[questionIndex] = answer;
//     setAnswers(updatedAnswers);
//   };

//   const handleMarkForReview = (questionIndex) => {
//     const updatedMarkedForReview = [...markedForReview];
//     if (markedForReview.includes(questionIndex)) {
//       updatedMarkedForReview.splice(updatedMarkedForReview.indexOf(questionIndex), 1);
//     } else {
//       updatedMarkedForReview.push(questionIndex);
//     }
//     setMarkedForReview(updatedMarkedForReview);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = () => {
//     const score = questions.reduce((total, question, index) => {
//       if (answers[index] === question.correctAnswer) {
//         return total + 1;
//       }
//       return total;
//     }, 0);

//     const attempted = answers.filter((answer) => answer !== null).length;
//     const unanswered = questions.length - attempted;
//     const correct = score;
//     const incorrect = attempted - correct;

//     // Pass all data including attempted, unanswered, correct, and incorrect answers
//     navigate("/results", {
//       state: { score, totalQuestions: questions.length, attempted, unanswered, correct, incorrect },
//     });
//   };

//   return (
//     <div className="mock-test-container">
//       <div className="content-section">
//         <div className="question-area">
//           {questions.length > 0 ? (
//             <Question
//               question={questions[currentQuestion]}
//               onChange={(answer) => handleAnswerChange(currentQuestion, answer)}
//               onMarkForReview={() => handleMarkForReview(currentQuestion)}
//               isMarkedForReview={markedForReview.includes(currentQuestion)}
//               selectedAnswer={answers[currentQuestion]}
//             />
//           ) : (
//             <p>Loading questions...</p>
//           )}
//         </div>
//         <div className="navigation-buttons">
//           <button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
//             Previous
//           </button>
//           <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
//             Next
//           </button>
//           <button onClick={handleSubmit} disabled={questions.length === 0 || timeRemaining <= 0}>
//             Submit
//           </button>
//         </div>
//       </div>
//       <div className="timer-section">
//         <Timer timeRemaining={timeRemaining} />
//         <QuestionPalette
//           questions={questions}
//           currentQuestion={currentQuestion}
//           answers={answers}
//           markedForReview={markedForReview}
//           onSelectQuestion={setCurrentQuestion}
//         />
//       </div>
//     </div>
//   );
// };

// export default MockTestSelection





import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";
import Question from "../components/Question";
import QuestionPalette from "../components/QuestionPalette";
import { useNavigate } from "react-router-dom";
import "./MockTestSelection.css";
import questionData from "../json/examquestion.json";

const MockTestSelection = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([null]);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(1800); // Initial time remaining = 300 seconds (5 minutes)

  useEffect(() => {
    if (questionData.length > 0) {
      setQuestions(questionData);
      setAnswers(new Array(questionData.length).fill(null)); // Initialize answers array
    }
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      handleSubmit();
    } else {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  const handleAnswerChange = (optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIndex; // Save optionIndex instead of the option text
    setAnswers(updatedAnswers);
  };

  const handleMarkForReview = () => {
    setMarkedForReview((prev) =>
      prev.includes(currentQuestion)
        ? prev.filter((q) => q !== currentQuestion)
        : [...prev, currentQuestion]
    );
  };

 
  const handleSubmit = () => {
    const score = questions.reduce((total, question, index) => {
      // Compare the option text with the correct answer
      if (question.options[answers[index]] === question.correctAnswer) {
        return total + 1;
      }
      return total;
    }, 0);
  
    const attempted = answers.filter((answer) => answer !== null).length;
    const unanswered = questions.length - attempted;
    const correct = score;
    const incorrect = attempted - correct;
  
    navigate("/results", {
      state: { score, totalQuestions: questions.length, attempted, unanswered, correct, incorrect },
    });
  };
  



  return (
    <div className="mock-test-container">
      <div className="content-section">
        <div className="question-area">
          {questions.length > 0 ? (
            <Question
              question={questions[currentQuestion]}
              onChange={handleAnswerChange} // Pass the handler for answer changes
              onMarkForReview={handleMarkForReview}
              isMarkedForReview={markedForReview.includes(currentQuestion)}
              selectedAnswer={answers[currentQuestion]} // Pass the current answer
            />
          ) : (
            <p>Loading questions...</p>
          )}
        </div>
        <div className="navigation-buttons">
          <button
            onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1))
            }
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
          <button
            onClick={handleSubmit}
            disabled={timeRemaining <= 0 || !questions.length} 
          >
            Submit
          </button>
        </div>
      </div>

      <div className="timer-section">
        <Timer timeRemaining={timeRemaining} />
          <QuestionPalette
            questions={questions}
            currentQuestion={currentQuestion}
            answers={answers}
            markedForReview={markedForReview}
            onSelectQuestion={setCurrentQuestion}
            onUnmark={handleMarkForReview}
          />
      </div>
    </div>
  );
};

export default MockTestSelection;
