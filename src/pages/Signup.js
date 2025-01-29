import { useState } from 'react';
import axios from 'axios';
import './Signup.css';  // Import the CSS file

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup', { email, password });
      if (response.data.success) {
        // Send OTP to verify email/phone
        await axios.post('/api/send-otp', { email });
        alert('OTP sent!');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleOtpVerification = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { email, otp });
      if (response.data.success) {
        setIsVerified(true);
        alert('OTP verified successfully!');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSignup}>Signup</button>

      {isVerified ? (
        <p>Signup successful! Please log in.</p>
      ) : (
        <div className="otp-container">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={handleOtpVerification}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
