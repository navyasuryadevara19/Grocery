import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EmailOtp.css';


const LoginOtpForm = () => {
    const navigate = useNavigate();
  const [otp, setOtp] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/verify-loginotp', {
        otp
      });
      if (response.status === 200) {
        alert('OTP verified successfully!');
        navigate('/');
      } else {
        alert('Failed to verify OTP.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP.');
    }
  };
  return (
  <div className='H'>
   <div className="container">
      <h1>OTP Code Verification</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter the OTP code sent to your Email:</label>
        <input
          type="text" id="otp" name="otp" placeholder="Enter the OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required/>
        <button type="submit">Verify OTP</button>
      </form>
    </div> 
  </div>

  );
};

export default LoginOtpForm;