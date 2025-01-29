
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './otp.css';

// const Otp = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { email } = location.state || {}; 
//   const [loading, setLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       otp: '',
//     },
//     validationSchema: Yup.object({
//       otp: Yup.string()
//         .required('Please enter the OTP.')
//         .length(6, 'OTP must be 6 digits long.')
//         .matches(/^[0-9]{6}$/, 'OTP must be a valid 6-digit number.'),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);

//       try {
//         // Send email and OTP to backend for verification
//         const response = await axios.post('https://your-backend-api.com/verify-otp', {
//           email,
//           otp: values.otp,
//         });

//         if (response.data.success) {
//           // If email is registered, navigate to the dashboard
//           if (response.data.isRegistered) {
//             navigate('/dashboard');
//           } else {
//             // If email is not registered, navigate to user details page
//             navigate('/UserDetails', { state: { email } });
//           }
//         } else {
//           // Handle OTP validation errors
//           formik.setFieldError('otp', response.data.message || 'Invalid OTP. Please try again.');
//         }
//       } catch (error) {
//         // Handle network or other errors
//         formik.setFieldError('otp', 'Network error. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Welcome Back!</h2>
//           <button className="close-button" onClick={() => navigate('/')}>
//             X
//           </button>
//         </div>
//         <div className="modal-body">
//           <p><strong>{email}</strong></p>  {/* Display the email address */}
//           <p>OTP has been sent to the above email address.</p>
//           <form onSubmit={formik.handleSubmit}>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="otp-input"
//               name="otp"
//               value={formik.values.otp}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.otp && formik.errors.otp && (
//               <p className="error-message">{formik.errors.otp}</p>
//             )}
//             <button
//               type="submit"
//               className="continue-button"
//               disabled={loading}
//             >
//               {loading ? 'Verifying...' : 'LOGIN'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './otp.css';

// const Otp = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { email } = location.state || {};  // Retrieving email from state

//   useEffect(() => {
//     if (!email) {
//       navigate('/');  // Redirect to login if no email is found in state
//     }
//   }, [email, navigate]);

//   const formik = useFormik({
//     initialValues: {
//       otp: '',
//     },
//     validationSchema: Yup.object({
//       otp: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
//         .required('Please enter the OTP sent to your email.'),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);

//       try {
//         const response = await axios.post('{{url}}/mockTest/user/verify-otp', {
//           email,
//           otp: values.otp,
//         });

//         if (response.data.success) {
//           // Navigate to Dashboard if OTP is correct
//           navigate('/dashboard');
//         } else {
//           alert(response.data.message || 'Invalid OTP. Please try again.');
//         }
//       } catch (error) {
//         alert('Network error. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="otp-modal">
//       <div className="otp-modal-content">
//         <div className="otp-modal-header">
//           <h2>Enter OTP</h2>
//         </div>
//         <div className="otp-modal-body">
//           <form onSubmit={formik.handleSubmit}>
//             <input
//               type="text"
//               id="otp"
//               placeholder="Enter OTP"
//               value={formik.values.otp}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="otp-input"
//             />
//             {formik.touched.otp && formik.errors.otp && (
//               <p className="error-message">{formik.errors.otp}</p>
//             )}
//             <button type="submit" className="verify-button" disabled={loading}>
//               {loading ? 'Verifying OTP...' : 'Verify OTP'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Otp;



// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './otp.css';
// import textbook from "../assets/image.png";

// const Otp = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Retrieve email from the location state passed during navigation
//   const { email } = location.state || {};  

//   const formik = useFormik({
//     initialValues: {
//       otp: '',
//     },
//     validationSchema: Yup.object({
//       otp: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
//         .required('Please enter the OTP sent to your email.'),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);

//       try {
//         const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
//           emailId: email, // Send the email ID from the state
//           otpCode: values.otp, // Send the OTP code entered by the user
//         });

//         if (response.data.status === 'success') { // Check if the response status is 'success'
//           // Navigate to Dashboard if OTP is verified successfully
//           navigate('/dashboard');
//         } else {
//           alert(response.data.message || 'Invalid OTP. Please try again.');
//         }
//       } catch (error) {
//         alert('Network error. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="otp-modal">
//       <div className="otp-modal-content">
//         <div className="modal-header">
//           <img src={textbook} alt="Testbook Logo" className="logo" />
//           <button className="close-button" onClick={() => navigate('/login')}>
//             X
//           </button>
//         </div>
//         <div className="otp-modal-header">
//           <p className="email-info">Email: {email}</p> {/* Display dynamic email */}
//         </div>
//         <div className="otp-modal-body">
//           <form onSubmit={formik.handleSubmit}>
//             <input
//               type="text"
//               id="otp"
//               placeholder="Enter OTP"
//               value={formik.values.otp}
//               onChange={(e) => {
//                 // Only allow numbers and limit length to 6
//                 const value = e.target.value.replace(/\D/g, '').slice(0, 6);
//                 formik.setFieldValue('otp', value);
//               }}
//               onBlur={formik.handleBlur}
//               inputMode="numeric" // Forces numeric keypad on mobile devices
//               maxLength="6" // Limit input to 6 digits
//               className="otp-input"
//             />
//             {formik.touched.otp && formik.errors.otp && (
//               <p className="error-message">{formik.errors.otp}</p>
//             )}
//             <button
//               type="submit"
//               className="verify-button"
//               disabled={loading || formik.values.otp.length !== 6} // Disable if OTP is not 6 digits
//             >
//               {loading ? 'Verifying OTP...' : 'Verify OTP'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Otp;

  // import React, { useState } from 'react';
  // import { useNavigate, useLocation } from 'react-router-dom';
  // import axios from 'axios';
  // import { useFormik } from 'formik';
  // import * as Yup from 'yup';
  // import './otp.css';
  // import textbook from "../assets/image.png";

  // const Otp = () => {
  //   const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   // Retrieve email from the location state passed during navigation
  //   const { email } = location.state || {};  

  //   const formik = useFormik({
  //     initialValues: {
  //       otp: '',
  //     },
  //     validationSchema: Yup.object({
  //       otp: Yup.string()
  //         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
  //         .required('Please enter the OTP sent to your email.'),
  //     }),
  //     onSubmit: async (values) => {
  //       setLoading(true);

  //       try {
  //         const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
  //           emailId: email, // Send the email ID from the state
  //           otpCode: values.otp, // Send the OTP code entered by the user
  //         });

  //         if (response.data.status === 'success') { // If OTP is verified successfully
  //           navigate('/dashboard'); // Navigate to Dashboard
  //         } else if (response.data.status === 'error') {
  //           // If status is error, fetch the error message and show it in the alert
  //           const errorMessage = response.data.message || 'Invalid OTP. Please try again.';
  //           alert(errorMessage); // Display the error message from the response
  //         }
  //       } catch (error) {
  //         alert('Network error. Please try again.');
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //   });

  //   return (
  //     <div className="otp-modal">
  //       <div className="otp-modal-content">
  //         <div className="modal-header">
  //           <img src={textbook} alt="Testbook Logo" className="logo" />
  //           <button className="close-button" onClick={() => navigate('/login')}>
  //             X
  //           </button>
  //         </div>
  //         <div className="otp-modal-header">
  //           <p className="email-info">Email: {email}</p> {/* Display dynamic email */}
  //         </div>
  //         <div className="otp-modal-body">
  //           <form onSubmit={formik.handleSubmit}>
  //             <input
  //               type="text"
  //               id="otp"
  //               placeholder="Enter OTP"
  //               value={formik.values.otp}
  //               onChange={(e) => {
  //                 // Only allow numbers and limit length to 6
  //                 const value = e.target.value.replace(/\D/g, '').slice(0, 6);
  //                 formik.setFieldValue('otp', value);
  //               }}
  //               onBlur={formik.handleBlur}
  //               inputMode="numeric" // Forces numeric keypad on mobile devices
  //               maxLength="6" // Limit input to 6 digits
  //               className="otp-input"
  //             />
  //             {formik.touched.otp && formik.errors.otp && (
  //               <p className="error-message">{formik.errors.otp}</p>
  //             )}
  //             <button
  //               type="submit"
  //               className="verify-button"
  //               disabled={loading || formik.values.otp.length !== 6} // Disable if OTP is not 6 digits
  //             >
  //               {loading ? 'Verifying OTP...' : 'Verify OTP'}
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default Otp;






  // import React, { useState } from 'react';
  // import { useNavigate, useLocation } from 'react-router-dom';
  // import axios from 'axios';
  // import { useFormik } from 'formik';
  // import * as Yup from 'yup';
  // import './otp.css';
  // import textbook from "../assets/image.png";
  
  // const Otp = () => {
  //   const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();
  //   const location = useLocation();
  
  //   // Retrieve email from the location state passed during navigation
  //   const { email } = location.state || {};  
  
  //   const formik = useFormik({
  //     initialValues: {
  //       otp: '',
  //     },
  //     validationSchema: Yup.object({
  //       otp: Yup.string()
  //         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
  //         .required('Please enter the OTP sent to your email.'),
  //     }),
  //     onSubmit: async (values) => {
  //       setLoading(true);
  
  //       try {
  //         const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
  //           emailId: email, // Send the email ID from the state
  //           otpCode: values.otp, // Send the OTP code entered by the user
  //         });
  
  //         console.log(response.data); // Log the response for debugging
  
  //         if (response.data.status === 'success') { // If OTP is verified successfully
  //           navigate('/dashboard'); // Navigate to Dashboard
  //         } else if (response.data.status === 'error') {
  //           // If status is error, fetch the error message and show it in the alert
  //           const errorMessage = response.data.message || 'Invalid OTP. Please try again.';
  //           alert(errorMessage); // Display the error message from the response
  //         }
  //       } catch (error) {
  //         const errorMsg = error.response?.data?.message || 'Network error. Please try again.';
  //         alert(errorMsg); // Show detailed error message
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //   });
  
  //   return (
  //     <div className="otp-modal">
  //       <div className="otp-modal-content">
  //         <div className="modal-header">
  //           <img src={textbook} alt="Testbook Logo" className="logo" />
  //           <button className="close-button" onClick={() => navigate('/login')}>
  //             X
  //           </button>
  //         </div>
  //         <div className="otp-modal-header">
  //           <p className="email-info">Email: {email}</p> {/* Display dynamic email */}
  //         </div>
  //         <div className="otp-modal-body">
  //           <form onSubmit={formik.handleSubmit}>
  //             <input
  //               type="text"
  //               id="otp"
  //               placeholder="Enter OTP"
  //               value={formik.values.otp}
  //               onChange={(e) => {
  //                 // Only allow numbers and limit length to 6
  //                 const value = e.target.value.replace(/\D/g, '').slice(0, 6);
  //                 formik.setFieldValue('otp', value);
  //               }}
  //               onBlur={formik.handleBlur}
  //               inputMode="numeric" // Forces numeric keypad on mobile devices
  //               maxLength="6" // Limit input to 6 digits
  //               className="otp-input"
  //             />
  //             {formik.touched.otp && formik.errors.otp && (
  //               <p className="error-message">{formik.errors.otp}</p>
  //             )}
  //             <button
  //               type="submit"
  //               className="verify-button"
  //               disabled={loading || formik.values.otp.length !== 6} // Disable if OTP is not 6 digits
  //             >
  //               {loading ? 'Verifying OTP...' : 'Verify OTP'}
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  
  // export default Otp;
  

  
  
  import React, { useState, useEffect } from 'react';
  import { useNavigate, useLocation } from 'react-router-dom';
  import axios from 'axios';
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
  import './otp.css';
  import textbook from "../assets/image.png";
  
  const Otp = () => {
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(0); // 30-second timer
    const [resendDisabled, setResendDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
  
    // Retrieve email from the location state passed during navigation
    const { email } = location.state || {};
  
    useEffect(() => {
      if (timer > 0) {
        const countdown = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
  
        return () => clearInterval(countdown);
      } else {
        setResendDisabled(false);
      }
    }, [timer]);
  
    const handleResendOtp = async () => {
      setLoading(true);
      try {
        const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/generate-otp', {
          emailId: email, // Resend OTP to the same email
        });
  
        if (response.data.status === 'success') {
          alert('OTP has been resent to your email.');
          setTimer(30); // Reset timer
          setResendDisabled(true); // Disable resend button again
        } else {
          alert(response.data.message || 'Failed to resend OTP.');
        }
      } catch (error) {
        alert('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    const formik = useFormik({
      initialValues: {
        otp: '',
      },
      validationSchema: Yup.object({
        otp: Yup.string()
          .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
          .required('Please enter the OTP sent to your email.'),
      }),
      onSubmit: async (values) => {
        setLoading(true);
        try {
          const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
            emailId: email, // Send the email ID from the state
            otpCode: values.otp, // Send the OTP code entered by the user
          });
      
          if (response.data.status === 'success') {
            navigate('/dashboard'); // Navigate to Dashboard
            alert('otp verified sucessed');

          } else if (response.data.status === 'error') {
            // Handle specific error response from the server
            alert(response.data.message || 'Invalid OTP. Please try again.');
          } else {
            alert('Unexpected response from the server.');
          }
        } catch (error) {
          // Handle network or other errors
          alert(error.response?.data?.message || 'Network error. Please try again.');
        } finally {
          setLoading(false);
        }
      },
      



    });
  
    return (
      <div className="otp-modal">
        <div className="otp-modal-content">
          <div className="modal-header">
            <img src={textbook} alt="Testbook Logo" className="logo" />
            <p className="close-button" onClick={() => navigate('/login')}>
              X
            </p>
          </div>
          <div className="otp-modal-header">
            <p className="email-info">Email: {email}</p>
          </div>
          <div className="otp-modal-body">
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
                value={formik.values.otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                  formik.setFieldValue('otp', value);
                }}
                onBlur={formik.handleBlur}
                inputMode="numeric"
                maxLength="6"
                className="otp-input"
              />
              {formik.touched.otp && formik.errors.otp && (
                <p className="error-message">{formik.errors.otp}</p>
              )}
              <button
                type="submit"
                className="verify-button"
                disabled={loading || formik.values.otp.length !== 6}
              >
                {loading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
            </form>
            <div className="resend-container">
              {timer > 0 ? (
                <p className="timer-text">Resend OTP in {timer} seconds</p>
              ) : (
                <p
                  className="resend-button"
                  onClick={handleResendOtp}
                  disabled={resendDisabled}
                >
                  Resend OTP
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Otp;
  