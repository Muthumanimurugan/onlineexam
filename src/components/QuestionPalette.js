// import React from 'react';
// import "./QuestionPalette.css";

// const QuestionPalette = ({ questions, currentQuestion, answers, markedForReview, onSelectQuestion }) => {
//   // Function to determine the class based on the question's answer and review status
//   const getStatusClass = (index) => {
//     if (answers[index] !== null) return 'answered'; // Question answered
//     if (markedForReview.includes(index)) return 'marked-for-review'; // Question marked for review
//     return 'not-answered'; // Question not answered
//   };

//   return (
//     <div className="question-palette">
//       <h3>Questions</h3>
//       <div className="palette">
//         {/* Loop through the questions and display each question number */}
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`question-number ${getStatusClass(index)} ${currentQuestion === index ? 'current' : ''}`}
//             onClick={() => onSelectQuestion(index)} // Set current question on click
//           >
//             {index + 1} {/* Display question number */}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionPalette;



// import React from 'react';
// import "./QuestionPalette.css";

// const QuestionPalette = ({ questions, currentQuestion, answers, markedForReview, onSelectQuestion, onUnmark }) => {
//   // Function to determine the class based on the question's answer and review status
//   const getStatusClass = (index) => {
//     if (answers[index] !== null) return 'answered'; // Question answered
//     if (markedForReview.includes(index)) return 'marked-for-review'; // Question marked for review
//     return 'not-answered'; // Question not answered
//   };

//   return (
//     <div className="question-palette">
//       <h3>Questions</h3>
//       <div className="palette">
//         {/* Loop through the questions and display each question number */}
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`question-number ${getStatusClass(index)} ${currentQuestion === index ? 'current' : ''}`}
//             onClick={() => onSelectQuestion(index)} // Set current question on click
//             onDoubleClick={() => onUnmark(index)} // Handle double-click to unmark
//           >
//             {index + 1} {/* Display question number */}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionPalette;


// import React from 'react';
// import "./QuestionPalette.css";

// const QuestionPalette = ({ questions, currentQuestion, answers, markedForReview, onSelectQuestion, onUnmark }) => {
//   // Function to determine the class based on the question's answer and review status
//   const getStatusClass = (index) => {
//     if (answers[index] !== null) return 'answered'; // Question answered
//     if (markedForReview.includes(index)) return 'marked-for-review'; // Question marked for review
//     return 'not-answered'; // Question not answered
//   };

//   return (
//     <div className="question-palette">
//       <h3>Questions</h3>
//       <div className="palette">
//         {/* Loop through the questions and display each question number */}
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`question-number ${getStatusClass(index)} ${currentQuestion === index ? 'current' : ''}`}
//             onClick={() => onSelectQuestion(index)} // Set current question on click
//             onDoubleClick={() => onUnmark(index)} // Handle double-click to unmark
//           >
//             {index + 1} {/* Display question number */}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionPalette;



// import React from 'react';
// import "./QuestionPalette.css";

// const QuestionPalette = ({ questions, currentQuestion, answers, markedForReview, onSelectQuestion, onUnmark }) => {
//   const getStatusClass = (index) => {
//     if (answers[index] !== null) return 'answered';
//     if (markedForReview.includes(index)) return 'marked-for-review';
//     return 'not-answered';
//   };

//   return (
//     <div className="question-palette">
//       <h3>Questions</h3>
//       <div className="palette">
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`question-number ${getStatusClass(index)} ${currentQuestion === index ? 'current' : ''}`}
//             onClick={() => onSelectQuestion(index)}
//             onDoubleClick={() => onUnmark(index)} // Handle double-click to unmark
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionPalette;



// import React from 'react';
// import "./QuestionPalette.css";

// const QuestionPalette = ({ questions, currentQuestion, answers, markedForReview, onSelectQuestion, onUnmark }) => {
//   const getStatusClass = (index) => {
//     if (answers[index] !== null) return 'answered';
//     if (markedForReview.includes(index)) return 'marked-for-review';
//     return 'not-answered';
//   };

//   return (
//     <div className="question-palette">
//       <h3>Questions</h3>
//       <div className="palette">
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className={`question-number ${getStatusClass(index)} ${currentQuestion === index ? 'current' : ''}`}
//             onClick={() => onSelectQuestion(index)}
//             onDoubleClick={() => onUnmark(index)} // Handle double-click to unmark
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionPalette;




// import React from "react";
// import "./QuestionPalette.css";

// const QuestionPalette = ({
//   questions,
//   currentQuestion,
//   answers,
//   markedForReview,
//   onSelectQuestion,
// }) => {
//   return (
//     <div className="question-palette">

// <div className="Legends">
//   <div className="legend">
//     <span className="circle answered-circle"></span> Answered
//   </div>
  
//   <div className="legend-1">
//     <span className="circle not-answered-circle"></span> Not Answered
//   </div>
//   <div className="legend-2">
//     <span className="circle Markedquestion"></span> Marked question
//   </div>
// </div>

//       <div className="palette">
//         {questions.map((_, index) => {
//           // Determine the button's class based on its state
//           let statusClass = [];

//           // If answered, change color
//           if (answers[index] !== null) {
//             statusClass.push("answered");
//           } else {
//             statusClass.push("not-answered");
//           }

//           // If marked for review, apply specific class
//           if (markedForReview.includes(index)) {
//             statusClass.push("marked-for-review");
//           }

//           // Highlight the current question
//           if (currentQuestion === index) {
//             statusClass.push("current");
//           }

//           return (
//             <button
//               key={index}
//               className={`question-number ${statusClass.join(" ")}`} // join the status classes
//               onClick={() => onSelectQuestion(index)}
//               aria-label={`Question ${index + 1}`}
//               title={`Question ${index + 1}`}
//               tabIndex={0}
//             >
//               {index + 1}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default QuestionPalette;




import React from "react";
import "./QuestionPalette.css";

const QuestionPalette = ({
  questions,
  currentQuestion,
  answers,
  markedForReview,
  onSelectQuestion,
}) => {
  return (
    <div className="question-palette">
      <div className="Legends">
        <div className="legend">
          <span className="circle answered-circle"></span> Answered
        </div>
        
        <div className="legend-1">
          <span className="circle not-answered-circle"></span> Not Answered
        </div>
        
        <div className="legend-2">
          <span className="circle Markedquestion"></span> Marked question
        </div>
      </div>

      <div className="palette">
        {questions.map((_, index) => {
          // Determine the button's class based on its state
          let statusClass = [];

          // If answered, change color
          if (answers[index] !== null) {
            statusClass.push("answered");
          } else {
            statusClass.push("not-answered");
          }

          // If marked for review, apply specific class
          if (markedForReview.includes(index)) {
            statusClass.push("marked-for-review");
          }

          // Highlight the current question
          if (currentQuestion === index) {
            statusClass.push("current");
          }

          return (
            <button
              key={index}
              className={`question-number ${statusClass.join(" ")}`} // join the status classes
              onClick={() => onSelectQuestion(index)}
              aria-label={`Question ${index + 1}`}
              title={`Question ${index + 1}`}
              tabIndex={0}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionPalette;
