



// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Timer from '../components/Timer';
// import Question from '../components/Question';
// import QuestionPalette from '../components/QuestionPalette';
// import { useNavigate } from 'react-router-dom';
// import "./interface.css";
// import { fetchFakeQuestions } from "../components/fetchFakeQuestions.js";

// const MockTestInterface = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [markedForReview, setMarkedForReview] = useState([]);
//   const [timeRemaining, setTimeRemaining] = useState(1300); // 60 minutes in seconds

//   useEffect(() => {
//     // Fetch questions from the fake API
//     const fetchQuestions = async () => {
//       try {
//         const fetchedQuestions = await fetchFakeQuestions();
//         setQuestions(fetchedQuestions);
//         setAnswers(Array(fetchedQuestions.length).fill(null)); // Initialize answers
//       } catch (error) {
//         console.error('Failed to fetch questions:', error);
//       }
//     };

//     fetchQuestions();

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
//     // Remove from answered or marked-for-review states
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
//     navigate('/results', { state: { score, totalQuestions: questions.length } });
//   };

//   return (
//     <div className="main-content">
//       <Sidebar />
//       <div className="test-container">
//         <Timer timeRemaining={timeRemaining} />
//         <QuestionPalette
//           questions={questions}
//           currentQuestion={currentQuestion}
//           answers={answers}
//           markedForReview={markedForReview}
//           onSelectQuestion={setCurrentQuestion}
//           onUnmark={handleUnmark} // Pass the unmark function
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
//     </div>
//   );
// };

// export default MockTestInterface;






import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./MockTestinterface.css";
import logo from "../assets/logo.png"; // Default fallback logo
import cardvaluejson from "../json/examname.json";
import cardlogo from "../assets/NEET.webp";

const MockTestInterface = () => {
  const [muthu, setMuthu] = useState({}); // Initial static value

  // Load card details from JSON
  const [carddetails] = useState(cardvaluejson);

  // Log card details to verify
  console.log("Card Details:", carddetails);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/mock-test"); // Replace with your API endpoint
        if (response.data) {
          setMuthu(response.data); // Assuming the response contains the fields: title, subject, and logo
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-content">
      <Sidebar />
      <div className="card-container row">
        {/* Render cards dynamically from JSON */}
        {carddetails.map((card, index) => (
          <Link to="/terms" className="card" key={index}> {/* Hardcoded link to /terms */}
            <div className="card-content">
              <img src={cardlogo || cardlogo} alt={`Card ${index + 1} Logo`} className="card-logo" />
              <h3>{card.title || "Default Title"}</h3>
              <h4>{card.subject || "Default Subject"}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MockTestInterface;
