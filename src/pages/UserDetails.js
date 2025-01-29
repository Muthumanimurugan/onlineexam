


// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './UserDetails.css';
// import textbook from "../assets/image.png";
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { TextField, InputAdornment } from '@mui/material';

// const UserDetails = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { email } = location.state || {}; // Retrieving email from state

//   const handleRegister = async (values) => {
//     setLoading(true);
//     try {
//       console.log("Registering user with values:", values); // Debugging log
  
//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
//         emailId: email,
//         userName: values.userName,
//         phoneNumber: values.phoneNumber,
//         otpCode: values.otpCode,
//       });
  
//       console.log("API Response:", response.data);
  
//       // Check if the status is "ACTIVE"
//       if (response.data.data && response.data.data.status === 'ACTIVE') {
//         navigate('/dashboard'); // Navigate to dashboard on success
//       } else {
//         alert(response.data.message || 'An error occurred. Please try again.');
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       alert('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const formik = useFormik({
//     initialValues: {
//       userName: '',
//       otpCode: '',
//       phoneNumber: '', // Add phoneNumber to formik's initial values
//     },
//     validationSchema: Yup.object({
//       userName: Yup.string().required('Please enter your name.'),
//       otpCode: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
//         .required('Please enter the OTP sent to your email or phone.'),
//       phoneNumber: Yup.string()
//         .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.')
//         .required('Please enter your phone number.'),
//     }),
//     onSubmit: (values) => {
//       handleRegister(values);
//     },
//   });

//   return (
//     <div className="user-details-container">
//       <div className="user-details-form">
//         <div className="wholeimage">
//           <img src={textbook} alt="Testbook Logo" className="logo" />
//           <button className="close-button" onClick={() => navigate('/Login')}>X</button>
//         </div>
//         <h2>User Details</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="userName">Name</label>
//             <input
//               type="text"
//               id="userName"
//               placeholder="Enter your name"
//               value={formik.values.userName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.userName && formik.errors.userName && (
//               <p className="error-message">{formik.errors.userName}</p>
//             )}
//           </div>

//           {/* Display Email */}
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email} // Display email from location state
//               disabled // Make the email field non-editable
//               className="input-field"
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="otpCode">OTP</label>
//             <input
//               type="text"
//               id="otpCode"
//               placeholder="Enter OTP"
//               value={formik.values.otpCode}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.otpCode && formik.errors.otpCode && (
//               <p className="error-message">{formik.errors.otpCode}</p>
//             )}
//           </div>

//           {/* Phone Number Validation */}
//           <div className="input-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <TextField
//               id="phoneNumber"
//               placeholder="Enter your 10-digit phone number"
//               value={formik.values.phoneNumber}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIphoneIcon />
//                   </InputAdornment>
//                 ),
//                 disableUnderline: true,
//               }}
//               className="input-field"
//               fullWidth
//               variant="standard"
//               sx={{
//                 '& .MuiInputBase-root': {
//                   border: 'none',
//                   boxShadow: 'none',
//                   borderBottom: '2px solid #ddd',
//                 },
//               }}
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="error-message">{formik.errors.phoneNumber}</p>
//             )}
//           </div>

//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;




// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './UserDetails.css';
// import textbook from "../assets/image.png";
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { TextField, InputAdornment } from '@mui/material';

// const UserDetails = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { email } = location.state || {}; // Retrieving email from state

//   const handleRegister = async (values) => {
//     setLoading(true);
//     try {
//       console.log("Registering user with values:", values); // Debugging log
  
//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
//         emailId: email,
//         userName: values.userName,
//         phoneNumber: values.phoneNumber,
//         otpCode: values.otpCode,
//       });
  
//       console.log("API Response:", response.data);
  
//       // Check if the status is "ACTIVE"
//       if (response.data.data && response.data.data.status === 'ACTIVE') {
//         navigate('/dashboard'); // Navigate to dashboard on success
//       } else {
//         alert(response.data.message || 'An error occurred. Please try again.');
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       alert('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const formik = useFormik({
//     initialValues: {
//       userName: '',
//       otpCode: '',
//       phoneNumber: '', // Add phoneNumber to formik's initial values
//     },
//     validationSchema: Yup.object({
//       userName: Yup.string()
//         .matches(/^[A-Za-z ]*$/, 'Please enter a valid name without numbers.') // Allow only alphabetic characters and spaces
//         .required('Please enter your name.'),
//       otpCode: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.') // Ensure OTP is 6 digits
//         .required('Please enter the OTP sent to your email or phone.'),
//         phoneNumber: Yup.string()
//         .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number.') // Only numeric values and exactly 10 digits
//         .required('Please enter your phone number.'),
        
//     }),
//     onSubmit: (values) => {
//       handleRegister(values);
//     },
//   });

//   // Custom handleChange function for userName to allow only alphabetic characters
//   const handleUserNameChange = (e) => {
//     let value = e.target.value;
//     // Allow only alphabetic characters and spaces
//     value = value.replace(/[^A-Za-z ]/g, ''); // Remove non-alphabetic characters
//     formik.setFieldValue('userName', value); // Update Formik state with the new value
//   };

//   // Custom handleChange function for OTP to allow only 6 digits and numeric values
//   const handleOtpChange = (e) => {
//     let value = e.target.value;
//     // Allow only numeric characters and limit to 6 digits
//     if (/[^0-9]/.test(value)) {
//       value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
//     }
//     if (value.length <= 6) { // Allow only up to 6 digits
//       formik.setFieldValue('otpCode', value); // Update Formik state with the new value
//     }
//   };




//   const handlePhoneNumberChange = (e) => {
//     let value = e.target.value;
//     // Allow only numeric characters
//     value = value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
//     // Allow only up to 10 digits
//     if (value.length <= 10) {
//       formik.setFieldValue('phoneNumber', value); // Update Formik state with the new value
//     }
//   }

//   return (
//     <div className="user-details-container">
//       <div className="user-details-form">
//         <div className="wholeimage">
//           <img src={textbook} alt="Testbook Logo" className="logo" />
//           <button className="close-button" onClick={() => navigate('/Login')}>X</button>
//         </div>
//         <h2>User Details</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="userName">Name</label>
//             <input
//               type="text"
//               id="userName"
//               placeholder="Enter your name"
//               value={formik.values.userName}
//               onChange={handleUserNameChange}  // Use the custom handleChange for userName
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.userName && formik.errors.userName && (
//               <p className="error-message">{formik.errors.userName}</p>
//             )}
//           </div>

//           {/* Display Email */}
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email} // Display email from location state
//               disabled // Make the email field non-editable
//               className="input-field"
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="otpCode">OTP</label>
//             <input
//               type="text"
//               id="otpCode"
//               placeholder="Enter OTP"
//               value={formik.values.otpCode}
//               onChange={handleOtpChange}  // Use the custom handleChange for OTP
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.otpCode && formik.errors.otpCode && (
//               <p className="error-message">{formik.errors.otpCode}</p>
//             )}
//           </div>

//           {/* Phone Number Validation */}
//           {/* <div className="input-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <TextField
//               id="phoneNumber"
//               placeholder="Enter your 10-digit phone number"
//               value={formik.values.phoneNumber}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIphoneIcon />
//                   </InputAdornment>
//                 ),
//                 disableUnderline: true,
//               }}
//               className="input-field"
//               fullWidth
//               variant="standard"
//               sx={{
//                 '& .MuiInputBase-root': {
//                   border: 'none',
//                   boxShadow: 'none',
//                   borderBottom: '2px solid #ddd',
//                 },
//               }}
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="error-message">{formik.errors.phoneNumber}</p>
//             )}
//           </div> */}


//      {/* Phone Number Validation */}
//      <div className="input-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <TextField
//               id="phoneNumber"
//               placeholder="Enter your 10-digit phone number"
//               value={formik.values.phoneNumber}
//               onChange={handlePhoneNumberChange}  // Use the custom handleChange for phoneNumber
//               onBlur={formik.handleBlur}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIphoneIcon />
//                   </InputAdornment>
//                 ),
//                 disableUnderline: true,
//               }}
//               className="input-field"
//               fullWidth
//               variant="standard"
//               sx={{
//                 '& .MuiInputBase-root': {
//                   border: 'none',
//                   boxShadow: 'none',
//                   borderBottom: '2px solid #ddd',
//                 },
//               }}
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="error-message">{formik.errors.phoneNumber}</p>
//             )}
//           </div>
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './UserDetails.css';
// import textbook from "../assets/image.png";
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { TextField, InputAdornment } from '@mui/material';

// const UserDetails = () => {
//   const [loading, setLoading] = useState(false);
//   const [otpTimer, setOtpTimer] = useState(90); // OTP timer duration in seconds (5 minutes)
//   const [otpExpired, setOtpExpired] = useState(false); // Flag to check if OTP expired
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { email } = location.state || {}; // Retrieving email from state

//   useEffect(() => {
//     if (otpTimer > 0 && !otpExpired) {
//       const timerInterval = setInterval(() => {
//         setOtpTimer((prev) => prev - 1);
//       }, 1000);

//       return () => clearInterval(timerInterval); // Clean up interval on component unmount
//     } else if (otpTimer === 0) {
//       setOtpExpired(true); // Mark OTP as expired when timer reaches 0
//     }
//   }, [otpTimer, otpExpired]);

//   const handleRegister = async (values) => {
//     setLoading(true);
//     try {
//       console.log("Registering user with values:", values); // Debugging log
  
//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
//         emailId: email,
//         userName: values.userName,
//         phoneNumber: values.phoneNumber,
//         otpCode: values.otpCode,
//       });
  
//       console.log("API Response:", response.data);
  
//       // Check if the status is "ACTIVE"
//       if (response.data.data && response.data.data.status === 'ACTIVE') {
//         navigate('/dashboard'); // Navigate to dashboard on success
//       } else {
//         alert(response.data.message || 'An error occurred. Please try again.');
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       alert('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const formik = useFormik({
//     initialValues: {
//       userName: '',
//       otpCode: '',
//       phoneNumber: '', // Add phoneNumber to formik's initial values
//     },
//     validationSchema: Yup.object({
//       userName: Yup.string()
//         .matches(/^[A-Za-z ]*$/, 'Please enter a valid name without numbers.') // Allow only alphabetic characters and spaces
//         .required('Please enter your name.'),
//       otpCode: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.') // Ensure OTP is 6 digits
//         .required('Please enter the OTP sent to your email or phone.'),
//         phoneNumber: Yup.string()
//         .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number.') // Only numeric values and exactly 10 digits
//         .required('Please enter your phone number.'),
        
//     }),
//     onSubmit: (values) => {
//       handleRegister(values);
//     },
//   });

//   // Custom handleChange function for userName to allow only alphabetic characters
//   const handleUserNameChange = (e) => {
//     let value = e.target.value;
//     // Allow only alphabetic characters and spaces
//     value = value.replace(/[^A-Za-z ]/g, ''); // Remove non-alphabetic characters
//     formik.setFieldValue('userName', value); // Update Formik state with the new value
//   };

//   // Custom handleChange function for OTP to allow only 6 digits and numeric values
//   const handleOtpChange = (e) => {
//     let value = e.target.value;
//     // Allow only numeric characters and limit to 6 digits
//     if (/[^0-9]/.test(value)) {
//       value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
//     }
//     if (value.length <= 6) { // Allow only up to 6 digits
//       formik.setFieldValue('otpCode', value); // Update Formik state with the new value
//     }
//   };

//   const handlePhoneNumberChange = (e) => {
//     let value = e.target.value;
//     // Allow only numeric characters
//     value = value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
//     // Allow only up to 10 digits
//     if (value.length <= 10) {
//       formik.setFieldValue('phoneNumber', value); // Update Formik state with the new value
//     }
//   };

//   // Convert OTP timer seconds into minutes and seconds
//   const minutes = Math.floor(otpTimer / 60);
//   const seconds = otpTimer % 60;
  
//   return (
//     <div className="user-details-container">
//       <div className="user-details-form">
//         <div className="wholeimage">
//           <img src={textbook} alt="Testbook Logo" className="logo" />
//           <button className="close-button" onClick={() => navigate('/Login')}>X</button>
//         </div>
//         <h2>User Details</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="userName">Name</label>
//             <input
//               type="text"
//               id="userName"
//               placeholder="Enter your name"
//               value={formik.values.userName}
//               onChange={handleUserNameChange}  // Use the custom handleChange for userName
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.userName && formik.errors.userName && (
//               <p className="error-message">{formik.errors.userName}</p>
//             )}
//           </div>

//           {/* Display Email */}
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email} // Display email from location state
//               disabled // Make the email field non-editable
//               className="input-field"
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="otpCode">OTP</label>
//             <input
//               type="text"
//               id="otpCode"
//               placeholder="Enter OTP"
//               value={formik.values.otpCode}
//               onChange={handleOtpChange}  // Use the custom handleChange for OTP
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.otpCode && formik.errors.otpCode && (
//               <p className="error-message">{formik.errors.otpCode}</p>
//             )}
//             {!otpExpired && otpTimer > 0 && (
//               <p className="otp-timer">
//                 Time remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//               </p>
//             )}
//             {otpExpired && <p className="otp-expired">OTP expired. Please request a new one.</p>}
//           </div>

//           {/* Phone Number Validation */}
//           <div className="input-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <TextField
//               id="phoneNumber"
//               placeholder="Enter your 10-digit phone number"
//               value={formik.values.phoneNumber}
//               onChange={handlePhoneNumberChange}  // Use the custom handleChange for phoneNumber
//               onBlur={formik.handleBlur}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIphoneIcon />
//                   </InputAdornment>
//                 ),
//                 disableUnderline: true,
//               }}
//               className="input-field"
//               fullWidth
//               variant="standard"
//               sx={{
//                 '& .MuiInputBase-root': {
//                   border: 'none',
//                   boxShadow: 'none',
//                   borderBottom: '2px solid #ddd',
//                 },
//               }}
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="error-message">{formik.errors.phoneNumber}</p>
//             )}
//           </div>

//           <button type="submit" className="submit-button" disabled={loading || otpExpired}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;

// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './UserDetails.css';
// import textbook from "../assets/image.png";
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { TextField, InputAdornment } from '@mui/material';

// const UserDetails = () => {
//   const [loading, setLoading] = useState(false); // Loading state for button
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { email } = location.state || {}; // Retrieving email from state

//   const handleRegister = async (values) => {
//     setLoading(true);
//     try {
//       console.log("Registering user with values:", values); // Debugging log
  
//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
//         emailId: email,
//         userName: values.userName,
//         phoneNumber: values.phoneNumber,
//         otpCode: values.otpCode,
//       });
  
//       console.log("API Response:", response.data);
  
//       // Check the status of the response and show appropriate alert
//       if (response.data.status === 'success') {
//         alert(response.data.message || 'User registered successfully.');
//         navigate('/dashboard'); // Navigate to dashboard on success
//       } else if (response.data.status === 'error') {
//         // Specifically checking for "Invalid or expired OTP." in the response
//         if (response.data.message === "Invalid or expired OTP.") {
//           alert(response.data.message);
//         } else {
//           alert(response.data.message || 'An error occurred. Please try again.');
//         }
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         // If the error has a response with a message, show that
//         alert(error.response.data.message);
//       } else {
//         // For network errors or other issues
//         alert('Network error. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const formik = useFormik({
//     initialValues: {
//       userName: '',
//       otpCode: '',
//       phoneNumber: '', // Add phoneNumber to formik's initial values
//     },
//     validationSchema: Yup.object({
//       userName: Yup.string()
//         .matches(/^[A-Za-z ]*$/, 'Please enter a valid name without numbers.') // Allow only alphabetic characters and spaces
//         .required('Please enter your name.'),
//       otpCode: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.') // Ensure OTP is 6 digits
//         .required('Please enter the OTP sent to your email or phone.'),
//       phoneNumber: Yup.string()
//         .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number.') // Only numeric values and exactly 10 digits
//         .required('Please enter your phone number.'),
//     }),
//     onSubmit: (values) => {
//       handleRegister(values);
//     },
//   });

//   // Custom handleChange function for userName to allow only alphabetic characters
//   const handleUserNameChange = (e) => {
//     let value = e.target.value;
//     // Allow only alphabetic characters and spaces
//     value = value.replace(/[^A-Za-z ]/g, ''); // Remove non-alphabetic characters
//     formik.setFieldValue('userName', value); // Update Formik state with the new value
//   };

//   // Custom handleChange function for OTP to allow only 6 digits and numeric values
//   const handleOtpChange = (e) => {
//     let value = e.target.value;
//     // Allow only numeric characters and limit to 6 digits
//     if (/[^0-9]/.test(value)) {
//       value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
//     }
//     if (value.length <= 6) { // Allow only up to 6 digits
//       formik.setFieldValue('otpCode', value); // Update Formik state with the new value
//     }
//   };

//   const handlePhoneNumberChange = (e) => {
//     let value = e.target.value;
//     // Allow only numeric characters
//     value = value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
//     // Allow only up to 10 digits
//     if (value.length <= 10) {
//       formik.setFieldValue('phoneNumber', value); // Update Formik state with the new value
//     }
//   };

//   return (
//     <div className="user-details-container">
//       <div className="user-details-form">
//         <div className="wholeimage">
//           <img src={textbook} alt="Testbook Logo" className="logo" />
//           <button className="close-button" onClick={() => navigate('/Login')}>X</button>
//         </div>
//         <h2>User Details</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="userName">Name</label>
//             <input
//               type="text"
//               id="userName"
//               placeholder="Enter your name"
//               value={formik.values.userName}
//               onChange={handleUserNameChange}  // Use the custom handleChange for userName
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.userName && formik.errors.userName && (
//               <p className="error-message">{formik.errors.userName}</p>
//             )}
//           </div>

//           {/* Display Email */}
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email} // Display email from location state
//               disabled // Make the email field non-editable
//               className="input-field"
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="otpCode">OTP</label>
//             <input
//               type="text"
//               id="otpCode"
//               placeholder="Enter OTP"
//               value={formik.values.otpCode}
//               onChange={handleOtpChange}  // Use the custom handleChange for OTP
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.otpCode && formik.errors.otpCode && (
//               <p className="error-message">{formik.errors.otpCode}</p>
//             )}
//           </div>

//           {/* Phone Number Validation */}
//           <div className="input-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <TextField
//               id="phoneNumber"
//               placeholder="Enter your 10-digit phone number"
//               value={formik.values.phoneNumber}
//               onChange={handlePhoneNumberChange}  // Use the custom handleChange for phoneNumber
//               onBlur={formik.handleBlur}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIphoneIcon />
//                   </InputAdornment>
//                 ),
//                 disableUnderline: true,
//               }}
//               className="input-field"
//               fullWidth
//               variant="standard"
//               sx={{
//                 '& .MuiInputBase-root': {
//                   border: 'none',
//                   boxShadow: 'none',
//                   borderBottom: '2px solid #ddd',
//                 },
//               }}
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="error-message">{formik.errors.phoneNumber}</p>
//             )}
//           </div>

//           <div className="submit-button">
//             <button type="submit" disabled={loading}>Register</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;




// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './UserDetails.css';
// import textbook from "../assets/image.png";
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { TextField, InputAdornment } from '@mui/material';
// import { Link } from "@mui/material";


// const UserDetails = () => {
//   const [loading, setLoading] = useState(false); // Loading state for button
//   const [resendTimer, setResendTimer] = useState(10); // Timer for resend OTP
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { email } = location.state || {}; // Retrieving email from state

//   useEffect(() => {
//     let timer;
//     if (resendTimer > 0) {
//       timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [resendTimer]);

//   const handleRegister = async (values) => {
//     setLoading(true);
//     try {
//       console.log("Registering user with values:", values); // Debugging log

//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
//         emailId: email,
//         userName: values.userName,
//         phoneNumber: values.phoneNumber,
//         otpCode: values.otpCode,
//       });

//       console.log("API Response:", response.data);

//       if (response.data.status === 'success') {
//         alert(response.data.message || 'User registered successfully.');
//         navigate('/dashboard');
//       } else if (response.data.status === 'error') {
//         if (response.data.message === "Invalid or expired OTP.") {
//           alert(response.data.message);
//         } else {
//           alert(response.data.message || 'An error occurred. Please try again.');
//         }
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         alert(error.response.data.message);
//       } else {
//         alert('Network error. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/generate-otp', { emailId: email });
//       if (response.data.status === 'success') {
//         alert('OTP has been resent successfully.');
//         setResendTimer(30); // Reset the timer
//       } else {
//         alert(response.data.message || 'Failed to resend OTP.');
//       }
//     } catch (error) {
//       console.error("Error during OTP resend:", error);
//       alert('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       userName: '',
//       otpCode: '',
//       phoneNumber: '',
//     },
//     validationSchema: Yup.object({
//       userName: Yup.string()
//         .matches(/^[A-Za-z ]*$/, 'Please enter a valid name without numbers.')
//         .required('Please enter your name.'),
//       otpCode: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
//         .required('Please enter the OTP sent to your email or phone.'),
//       phoneNumber: Yup.string()
//         .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number.')
//         .required('Please enter your phone number.'),
//     }),
//     onSubmit: (values) => {
//       handleRegister(values);
//     },
//   });

//   const handleUserNameChange = (e) => {
//     let value = e.target.value;
//     value = value.replace(/[^A-Za-z ]/g, '');
//     formik.setFieldValue('userName', value);
//   };

//   const handleOtpChange = (e) => {
//     let value = e.target.value;
//     if (/[^0-9]/.test(value)) {
//       value = value.replace(/[^0-9]/g, '');
//     }
//     if (value.length <= 6) {
//       formik.setFieldValue('otpCode', value);
//     }
//   };

//   const handlePhoneNumberChange = (e) => {
//     let value = e.target.value;
//     value = value.replace(/[^0-9]/g, '');
//     if (value.length <= 10) {
//       formik.setFieldValue('phoneNumber', value);
//     }
//   };

//   return (
//     <div className="user-details-container">
//       <div className="user-details-form">
//         <div className="wholeimage">
//           <img src={textbook} alt="Testbook Logo" className="logo" />
//           <button className="close-button" onClick={() => navigate('/Login')}>X</button>
//         </div>
//         <h2>User Details</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="userName">Name</label>
//             <input
//               type="text"
//               id="userName"
//               placeholder="Enter your name"
//               value={formik.values.userName}
//               onChange={handleUserNameChange}
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.userName && formik.errors.userName && (
//               <p className="error-message">{formik.errors.userName}</p>
//             )}
//           </div>

//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               disabled
//               className="input-field"
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="otpCode">OTP</label>
//             <input
//               type="text"
//               id="otpCode"
//               placeholder="Enter OTP"
//               value={formik.values.otpCode}
//               onChange={handleOtpChange}
//               onBlur={formik.handleBlur}
//               className="input-field"
//             />
//             {formik.touched.otpCode && formik.errors.otpCode && (
//               <p className="error-message">{formik.errors.otpCode}</p>
//             )}
//             {resendTimer > 0 ? (
//               <p className="resend-timer" style={{ fontSize: '12px' }}>Resend OTP in {resendTimer} seconds</p>
//             ) : (
// <Link 
//   component="button" 
//   variant="body2" 
//   sx={{ 
//     textDecoration: "none", 
//     display: "block", 
//     mx: "auto",  // Centers horizontally
//     mt: 1,  // Adds top margin
//     mb: 2   // Adds bottom margin
//   }} 
//   onClick={handleResendOtp} 
//   disabled={loading}
// >
//   Resend OTP
// </Link>

            
            
            
//             )}
//           </div>

//           <div className="input-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <TextField
//               id="phoneNumber"
//               placeholder="Enter your 10-digit phone number"
//               value={formik.values.phoneNumber}
//               onChange={handlePhoneNumberChange}
//               onBlur={formik.handleBlur}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIphoneIcon />
//                   </InputAdornment>
//                 ),
//                 disableUnderline: true,
//               }}
//               className="input-field"
//               fullWidth
//               variant="standard"
//               sx={{
//                 '& .MuiInputBase-root': {
//                   border: 'none',
//                   boxShadow: 'none',
//                   borderBottom: '2px solid #ddd',
//                 },
//               }}
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="error-message">{formik.errors.phoneNumber}</p>
//             )}
//           </div>

//           <div className="submit-button">
//             <button type="submit" className='userdetails-registerbutton' disabled={loading}>Register</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;









// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './UserDetails.css';
// import textbook from "../assets/image.png";
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { TextField, InputAdornment } from '@mui/material';

// const UserDetails = () => {
//   const [loading, setLoading] = useState(false);
//   const [resendTimer, setResendTimer] = useState(10);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { email } = location.state || {};

//   useEffect(() => {
//     let timer;
//     if (resendTimer > 0) {
//       timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [resendTimer]);

//   const handleRegister = async (values) => {
//     setLoading(true);
//     try {
//       console.log("Registering user with values:", values);

//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
//         emailId: email,
//         userName: values.userName,
//         phoneNumber: values.phoneNumber,
//         otpCode: values.otpCode,
//       });

//       console.log("API Response:", response.data);

//       if (response.data.status === 'success') {
//         alert(response.data.message || 'User registered successfully.');
//         navigate('/dashboard');
//       } else {
//         alert(response.data.message || 'An error occurred. Please try again.');
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       alert(error.response?.data?.message || 'Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/generate-otp', { emailId: email });
//       if (response.data.status === 'success') {
//         alert('OTP has been resent successfully.');
//         setResendTimer(30);
//       } else {
//         alert(response.data.message || 'Failed to resend OTP.');
//       }
//     } catch (error) {
//       console.error("Error during OTP resend:", error);
//       alert('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       userName: '',
//       otpCode: '',
//       phoneNumber: '',
//     },
//     validationSchema: Yup.object({
//       userName: Yup.string()
//         .matches(/^[A-Za-z ]*$/, 'Please enter a valid name without numbers.')
//         .required('Please enter your name.'),
//       otpCode: Yup.string()
//         .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
//         .required('Please enter the OTP sent to your email or phone.'),
//       phoneNumber: Yup.string()
//         .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number.')
//         .required('Please enter your phone number.'),
//     }),
//     onSubmit: handleRegister,
//   });

//   return (
//     <div className="userdetails-container">
//       <div className="userdetails-form">
//         <div className="userdetails-header">
//           <img src={textbook} alt="Testbook Logo" className="userdetails-logo" />
//           <p className="userdetails-close-button" onClick={() => navigate('/Login')}>X</p>
//         </div>
//         <h2>User Details</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="userdetails-input-group">
//             <label htmlFor="userName">Name</label>
//             <input
//               type="text"
//               id="userName"
//               placeholder="Enter your name"
//               {...formik.getFieldProps('userName')}
//               className="userdetails-input-field"
//             />
//             {formik.touched.userName && formik.errors.userName && (
//               <p className="userdetails-error-message">{formik.errors.userName}</p>
//             )}
//           </div>

//           <div className="userdetails-input-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" value={email} disabled className="userdetails-input-field" />
//           </div>

//           <div className="userdetails-input-group">
//             <label htmlFor="otpCode">OTP</label>
//             <input
//               type="text"
//               id="otpCode"
//               placeholder="Enter OTP"
//               {...formik.getFieldProps('otpCode')}
//               className="userdetails-input-field"
//             />
//             {formik.touched.otpCode && formik.errors.otpCode && (
//               <p className="userdetails-error-message">{formik.errors.otpCode}</p>
//             )}
//             {resendTimer > 0 ? (
//               <p className="userdetails-resend-timer">Resend OTP in {resendTimer} seconds</p>
//             ) : (
//               <p className="userdetails-resend-otp-button" onClick={handleResendOtp} disabled={loading}>
//                 Resend OTP
//               </p>
//             )}
//           </div>

//           <div className="userdetails-input-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <TextField
//               id="phoneNumber"
//               placeholder="Enter your 10-digit phone number"
//               {...formik.getFieldProps('phoneNumber')}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIphoneIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               className="userdetails-input-field"
//               fullWidth
//               variant="standard"
//             />
//             {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//               <p className="userdetails-error-message">{formik.errors.phoneNumber}</p>
//             )}
//           </div>

//           <p type="submit" className="userdetails-register-button" disabled={loading}>Register</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;





import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './UserDetails.css';
import textbook from "../assets/image.png";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { TextField, InputAdornment, Link } from '@mui/material';

const UserDetails = () => {
  const [loading, setLoading] = useState(false); // Loading state for button
  const [resendTimer, setResendTimer] = useState(10); // Timer for resend OTP
  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state || {}; // Retrieving email from state

  // Timer for Resend OTP functionality
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  // Register user and handle form submission
  const handleRegister = async (values) => {
    setLoading(true);
    try {
      console.log("Registering user with values:", values); // Debugging log

      const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/register', {
        emailId: email,
        userName: values.userName,
        phoneNumber: values.phoneNumber,
        otpCode: values.otpCode,
      });

      console.log("API Response:", response.data);

      if (response.data.status === 'success') {
        alert(response.data.message || 'User registered successfully.');
        navigate('/dashboard');
      } else {
        alert(response.data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error.response?.data?.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP functionality
  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://ttdc.skeintech.com/mockTest/user/generate-otp', { emailId: email });
      if (response.data.status === 'success') {
        alert('OTP has been resent successfully.');
        setResendTimer(30); // Reset the timer
      } else {
        alert(response.data.message || 'Failed to resend OTP.');
      }
    } catch (error) {
      console.error("Error during OTP resend:", error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Formik setup for form validation and handling
  const formik = useFormik({
    initialValues: {
      userName: '',
      otpCode: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter a valid name without numbers.')
        .required('Please enter your name.'),
      otpCode: Yup.string()
        .matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP.')
        .required('Please enter the OTP sent to your email or phone.'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number.')
        .required('Please enter your phone number.'),
    }),
    onSubmit: handleRegister,
  });

  // Custom input change handlers
  const handleUserNameChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^A-Za-z ]/g, ''); // Allow only alphabets and spaces
    formik.setFieldValue('userName', value);
  };

  const handleOtpChange = (e) => {
    let value = e.target.value;
    if (/[^0-9]/.test(value)) {
      value = value.replace(/[^0-9]/g, ''); // Allow only digits
    }
    if (value.length <= 6) {
      formik.setFieldValue('otpCode', value);
    }
  };

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, ''); // Allow only digits
    if (value.length <= 10) {
      formik.setFieldValue('phoneNumber', value);
    }
  };

  return (
    <div className="userdetails-container">
      <div className="userdetails-form">
        <div className="userdetails-header">
          <img src={textbook} alt="Testbook Logo" className="userdetails-logo" />
          <p className="userdetails-close-button" onClick={() => navigate('/Login')}>X</p>
        </div>
        <h2>User Details</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <div className="userdetails-input-group">
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              id="userName"
              placeholder="Enter your name"
              value={formik.values.userName}
              onChange={handleUserNameChange} // Using custom change handler
              className="userdetails-input-field"
            />
            {formik.touched.userName && formik.errors.userName && (
              <p className="userdetails-error-message">{formik.errors.userName}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="userdetails-input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} disabled className="userdetails-input-field" />
          </div>

          {/* OTP Field */}
          <div className="userdetails-input-group">
            <label htmlFor="otpCode">OTP</label>
            <input
              type="text"
              id="otpCode"
              placeholder="Enter OTP"
              value={formik.values.otpCode}
              onChange={handleOtpChange} // Using custom change handler
              className="userdetails-input-field"
            />
            {formik.touched.otpCode && formik.errors.otpCode && (
              <p className="userdetails-error-message">{formik.errors.otpCode}</p>
            )}
            {resendTimer > 0 ? (
              <p className="userdetails-resend-timer">Resend OTP in {resendTimer} seconds</p>
            ) : (
              <Link
                component="button"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  display: "block",
                  mx: "auto",  // Centers horizontally
                  mt: 1,  // Adds top margin
                  mb: 2   // Adds bottom margin
                }}
                onClick={handleResendOtp}
                disabled={loading}
              >
                Resend OTP
              </Link>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="  -input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <TextField
              id="phoneNumber"
              placeholder="Enter your 10-digit phone number"
              value={formik.values.phoneNumber}
              onChange={handlePhoneNumberChange} // Using custom change handler
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphoneIcon />
                  </InputAdornment>
                ),
              }}
              className="userdetails-input-field"
              fullWidth
              variant="standard"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="userdetails-error-message">{formik.errors.phoneNumber}</p>
            )}
          </div>

          {/* Submit Button */}
          <p type="submit" className="userdetails-register-button" onClick={formik.handleSubmit} disabled={loading}>
            Register
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
