// import React from 'react';
// import "./Time.css"

// const Timer = ({ timeRemaining }) => {
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="timer-container">
//       <h3>Time Remaining</h3>
//       <div className="timer">{formatTime(timeRemaining)}</div>
//     </div>
//   );
// };

// export default Timer;



// import React from 'react';
// import "./Time.css";

// const Timer = ({ timeRemaining }) => {
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="timer-container">
//       <h3>Time Remaining</h3>
//       <div className="timer">{formatTime(timeRemaining)}</div>
//     </div>
//   );
// };

// export default Timer;

import React from 'react';
import "./Time.css";

const Timer = ({ timeRemaining }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h3>Time Remaining</h3>
      <div className="timer">{formatTime(Math.max(timeRemaining, 0))}</div>
    </div>
  );
};

export default Timer;
