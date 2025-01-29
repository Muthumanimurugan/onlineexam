// import React from 'react';
// import "./Question.css"

// const Question = ({ question, onChange, onMarkForReview, isMarkedForReview, selectedAnswer }) => {
//   return (
//     <div className="question-container">
//       <h3>Question {question.id}</h3>
//       <p className="question-text">{question.questionText}</p>
//       <div className="options">
//         {question.options.map((option, index) => (
//           <div key={index} className="option">
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name={`question-${question.id}`}
//               value={option}
//               checked={selectedAnswer === option}
//               onChange={() => onChange(option)}
//             />
//             <label htmlFor={`option-${index}`}>{option}</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={onMarkForReview} className={`mark-review ${isMarkedForReview ? 'active' : ''}`}>
//         {isMarkedForReview ? 'Unmark Review' : 'Mark for Review'}
//       </button>
//     </div>
//   );
// };

// export default Question;



// import React from 'react';
// import "./Question.css"

// const Question = ({ question, onChange, onMarkForReview, isMarkedForReview, selectedAnswer }) => {
//   return (
//     <div className="question-container">
//       <h3>Question {question.id}</h3>
//       <p className="question-text">{question.questionText}</p>
//       <div className="options">
//         {question.options.map((option, index) => (
//           <div key={index} className="option">
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name={`question-${question.id}`}
//               value={option}
//               checked={selectedAnswer === option}
//               onChange={() => onChange(option)}
//             />
//             <label htmlFor={`option-${index}`}>{option}</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={onMarkForReview} className={`mark-review ${isMarkedForReview ? 'active' : ''}`}>
//         {isMarkedForReview ? 'Unmark Review' : 'Mark for Review'}
//       </button>
//     </div>
//   );
// };

// export default Question;


// import React from 'react';
// import "./Question.css";

// const Question = ({ question, onChange, onMarkForReview, isMarkedForReview, selectedAnswer }) => {
//   return (
//     <div className="question-container">
//       <h3>Question {question.id}</h3>
//       <p className="question-text">{question.questionText}</p>
//       <div className="options">
//         {question.options.map((option, index) => (
//           <div key={index} className="option">
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name={`question-${question.id}`}
//               value={option}
//               checked={selectedAnswer === option}
//               onChange={() => onChange(option)}
//             />
//             <label htmlFor={`option-${index}`}>{option}</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={onMarkForReview} className={`mark-review ${isMarkedForReview ? 'active' : ''}`}>
//         {isMarkedForReview ? 'Unmark Review' : 'Mark for Review'}
//       </button>
//     </div>
//   );
// };

// export default Question;



// import React from 'react';
// import "./Question.css";

// const Question = ({ question, onChange, onMarkForReview, isMarkedForReview, selectedAnswer }) => {
//   return (
//     <div className="question-container">
//       <h3>Question {question.id}</h3>
//       <p className="question-text">{question.questionText}</p>
//       <div className="options">
//         {question.options.map((option, index) => (
//           <div key={index} className="option">
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name={`question-${question.id}`}
//               value={option}
//               checked={selectedAnswer === option}
//               onChange={() => onChange(option)}
//             />
//             <label htmlFor={`option-${index}`}>{option}</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={onMarkForReview} className={`mark-review ${isMarkedForReview ? 'active' : ''}`}>
//         {isMarkedForReview ? 'Unmark Review' : 'Mark for Review'}
//       </button>
//     </div>
//   );
// };

// export default Question;


// import React from 'react';
// import "./Question.css";

// const Question = ({ question, onChange, onMarkForReview, isMarkedForReview, selectedAnswer }) => {
//   return (
//     <div className="question-container">
//       <h3>Question {question.id}</h3>
//       <p className="question-text">{question.questionText}</p>
//       <div className="options">
//         {question.options.map((option, index) => (
//           <div key={index} className="option">
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name={`question-${question.id}`}
//               value={option}
//               checked={selectedAnswer === option}
//               onChange={() => onChange(option)}
//             />
//             <label htmlFor={`option-${index}`}>{option}</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={onMarkForReview} className={`mark-review ${isMarkedForReview ? 'active' : ''}`}>
//         {isMarkedForReview ? 'Unmark Review' : 'Mark for Review'}
//       </button>
//     </div>
//   );
// };

// export default Question;




import React from "react";
import "./Question.css";

const Question = ({
  question,
  onChange,
  onMarkForReview,
  isMarkedForReview,
  selectedAnswer,
}) => {

  console.log("Selected Answer: ", selectedAnswer);

  return (
    <div className="question-container">
      {/* Question Title */}
      <h3 className="question-title">Question {question.id}</h3>

      {/* Question Text */}
      <p className="question-text">{question.questionText}</p>

      {/* Options Section */}
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              id={`option-${question.id}-${index}`}
              name={`question-${question.id}`}
              value={index}
              checked={selectedAnswer === index} // Ensure the correct option is selected
              onChange={() => onChange(index)} // Update state when option is selected
            />
            <label
              htmlFor={`option-${question.id}-${index}`}
              className={`option-label ${
                selectedAnswer === index ? "selected" : ""
              }`} // Apply "selected" class dynamically
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      {/* Mark for Review Button */}
        <button
          onClick={onMarkForReview}
          className={`mark-review-btn ${isMarkedForReview ? "active" : ""}`}
        >
          {isMarkedForReview ? "Unmark Review" : "Mark for Review"}
        </button>
    </div>
  );
};

export default Question;

