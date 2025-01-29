

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './Login.css';

// import textbook from "../assets/image.png";

// function Login() {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email('Please enter a valid email address.')
//         .required('Please enter your email address.'),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);

//       try {
//         // Send the emailId in the request body
//         const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/generate-otp', {
//           emailId: values.email,
//         });

//         if (response.data.status === 'success') {  // Check if the response status is success
//           const userStatus = response.data.data.userStatus;

//           if (userStatus === 'newUser') {
//             // Navigate to User Detailed page for new user
//             navigate('/UserDetails', { state: { email: values.email } });
//           } else if (userStatus === 'existingUser') {
//             // Navigate to OTP page for existing user
//             navigate('/otp', { state: { email: values.email } });
//           }
//         } else {
//           alert(response.data.message || 'An error occurred. Please try again.');
//         }
//       } catch (error) {
//         alert('Network error. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className='main-container'>
//     <div className="modal">
//       <div className="modal-content">
//         <div className="modal-header">
//           <img src={textbook} alt="Testbook Logo" className="logo" />
//           <button className="close-button" onClick={() => navigate('/')}>
//             X
//           </button>
//         </div>
//         <div className="modal-body">
//           <h2>Get started with MCQ!</h2>
//           <form onSubmit={formik.handleSubmit}>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email address"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="email-input"
//             />
//             {formik.touched.email && formik.errors.email && (
//               <p className="error-message">{formik.errors.email}</p>
//             )}
//             <button type="submit" className="continue-button" disabled={loading}>
//               {loading ? 'Sending OTP...' : 'Continue'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';

import textbook from "../assets/image.png";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Please enter a valid email address.'
        )
        .required('Please enter your email address.'),
    }),

    onSubmit: async (values) => {
      setLoading(true);
    
      try {
        const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/generate-otp', {
          emailId: values.email,
        });
    
        // Check if the response status is success
        if (response.data.status === 'success') {
          // Display the success message from the response
          alert(response.data.message || 'OTP sent successfully.');
    
          const userStatus = response.data.data.userStatus; 
    
          if (userStatus === 'newUser') {
            navigate('/UserDetails', { state: { email: values.email } });
          } else if (userStatus === 'existingUser') {
            navigate('/otp', { state: { email: values.email } });
          }
        } else {
          alert(response.data.message || 'An error occurred. Please try again.');
        }
      } catch (error) {
        alert('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    

  });

  return (
    <div className='main-container'>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <img src={textbook} alt="Testbook Logo" className="logo" />
            <p className="close-button" onClick={() => navigate('/')}>
              X
            </p>
          </div>
          <div className="modal-body">
            <h2>Get started with MCQ!</h2>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={formik.values.email}
                onChange={(e) => {
                  // Remove spaces from the input
                  formik.setFieldValue('email', e.target.value.replace(/\s/g, ''));
                }}
                onBlur={formik.handleBlur}
                className="email-input"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="error-message">{formik.errors.email}</p>
              )}
              <button
                type="submit"
                className="continue-button"
                disabled={loading || !formik.isValid}
              >
                {loading ? 'Sending OTP...' : 'Continue'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
