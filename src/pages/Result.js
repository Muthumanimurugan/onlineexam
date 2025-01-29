  // import React from 'react';
  // import { useLocation } from 'react-router-dom';

  // const Results = () => {
  //   const { state } = useLocation();
  //   const { score, totalQuestions } = state || {};

  //   return (
 
  //     <div className="results-container">
  //       <h2>Test Completed!</h2>
  //       <p>You answered {score} out of {totalQuestions} questions correctly.</p>
  //       <p>Your score: {score} / {totalQuestions}</p>
  //       <p>Percentage: {(score / totalQuestions) * 100}%</p>
  //       <button onClick={() => window.location.reload()}>Try Again</button>
  //     </div>


  //   );
  // };

  // export default Results;


  // import React from 'react';
  // import { useLocation } from 'react-router-dom';
  
  // const Results = () => {
  //   const { state } = useLocation();
  //   const { score, totalQuestions, attempted, unanswered, correct, incorrect } = state || {};
  
  //   return (
  //     <div className="results-container">
  //       <h2>Test Completed!</h2>
  //       <p>You answered {correct} out of {totalQuestions} questions correctly.</p>
  //       <p>Your score: {score} / {totalQuestions}</p>
  //       <p>Percentage: {totalQuestions ? ((score / totalQuestions) * 100).toFixed(2) : 0}%</p>
  //       <p>Attempted: {attempted}</p>
  //       <p>Unanswered: {unanswered}</p>
  //       <p>Correct: {correct}</p>
  //       <p>Incorrect: {incorrect}</p>
  //       <button onClick={() => window.location.reload()}>Try Again</button>
  //     </div>
  //   );
  // };
  
  // export default Results;
  import React from "react";
  import { useLocation } from "react-router-dom";
  import "./Result.css";
  
  const Results = () => {
    const { state } = useLocation();
    const { score, totalQuestions, attempted, unanswered, correct, incorrect } = state || {};
  
    return (
      <div className="results-page">
        <div className="results-card">
          <h2>Test Completed!</h2>
          <ul className="results-list">
            <li>
              <strong>Total Questions:</strong> {totalQuestions}
            </li>
            <li>
              <strong>Correct Answers:</strong> {correct}
            </li>
            <li>
              <strong>Incorrect Answers:</strong> {incorrect}
            </li>
            <li>
              <strong>Unanswered Questions:</strong> {unanswered}
            </li>
            <li>
              <strong>Attempted Questions:</strong> {attempted}
            </li>
            <li>
              <strong>Score:</strong> {score} / {totalQuestions}
            </li>
            <li>
              <strong>Percentage:</strong>{" "}
              {totalQuestions ? ((score / totalQuestions) * 100).toFixed(2) : 0}%
            </li>
          </ul>
          <div className="button-container">
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Results;
  