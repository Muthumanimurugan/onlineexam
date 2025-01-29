// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from "../components/Sidebar";
// import './TermsAndConditions.css';


// const TermsAndConditions = () => {
//   const [accepted, setAccepted] = useState(false);
//   const navigate = useNavigate();

//   const handleAccept = () => {
//     setAccepted(true);
//     // Navigate to the Mock Test interface after acceptance
//     navigate("/mockTestinterface");
//   };

//   return (
//     <div className="main-content">
//       <Sidebar />
//       <div className="terms-container">
//         <h2>Terms and Conditions</h2>
//         <p>
//           Please read and accept the terms and conditions to start the mock test.
//         </p>
//         <textarea
//           disabled
//           value="Here you can include terms and conditions of the exam..."
//         />
//         <div className="accept-container">
//           <button onClick={handleAccept} disabled={accepted}>
//             {accepted ? 'Terms Accepted' : 'Accept Terms'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from "../components/Sidebar";
// import './TermsAndConditions.css';

// const TermsAndConditions = () => {
//   const [accepted, setAccepted] = useState(false);
//   const navigate = useNavigate();

//   const handleAccept = () => {
//     setAccepted(true);
//     // Navigate to the Mock Test interface after acceptance
//     navigate("/mockTestinterface");
//   };

//   return (
//     <div className="main-content">
//       <Sidebar />
//       <div className="terms-container">
//         <h2>Terms and Conditions</h2>
//         <p>
//           Please read and accept the terms and conditions to start the mock test.
//         </p>
//         <textarea className='textarea'
//           disabled
//           value="Here you can include terms and conditions of the exam...
       
//           1. Eligibility: You must be at least 18 years old to participate in the exam.
//           2. Registration: You must complete the registration process to take the exam.
//           3. Exam Rules: The exam must be taken in one sitting. No cheating or sharing of answers.
//           4. Privacy: Your data will be handled securely and will not be shared with third parties.
//           5. Results: Results will be displayed after the completion of the exam.
          
//           By accepting, you agree to abide by these terms."
//         />
//         <div className="accept-container">
//           <button onClick={handleAccept} disabled={accepted}>
//             {accepted ? 'Terms Accepted' : 'Accept Terms'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import './TermsAndConditions.css';
import axios from 'axios';
import condition from "../json/terms and condition.json"; // Import the local JSON

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);
  const [terms, setTerms] = useState([]); // State to store fetched terms
  const navigate = useNavigate();

  const [muthu] = useState(condition);

  // Fetch terms and conditions from the API or JSON
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await axios.get('/api/terms'); // API endpoint for terms
        if (response.data) {
          setTerms(response.data.terms); // Assuming response contains `terms`
        }
      } catch (error) {
        console.error('Error fetching terms:', error);
      }
    };

    fetchTerms();
  }, []); // Fetch terms once on component mount

  const handleAccept = () => {
    setAccepted(true);
    // Navigate to the Mock Test interface after acceptance
    navigate("/MockTestSelection");
  };

  return (
    <div className="main-content">
      <Sidebar />
      <div className="terms-container">
        <h2>Terms and Conditions</h2>
        <p>Please read and accept the terms and conditions to start the mock test.</p>
        
        {/* Display terms dynamically */}
        <div className="terms-list">
          {muthu.length > 0 ? (
            // Map through the terms and remove leading spaces from keys
            muthu.map((term, index) => (
              <div key={index} className="term-item">
                {Object.entries(term).map(([key, value], idx) => (
                  <div key={idx}>
                    <h4>{key.trim()}</h4> {/* Trim spaces from the key */}
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Loading terms and conditions...</p> // Loading message if terms are being fetched
          )}
        </div>

        <div className="accept-container">
          <button onClick={handleAccept} disabled={accepted}>
            {accepted ? 'Terms Accepted' : 'Accept Terms'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
