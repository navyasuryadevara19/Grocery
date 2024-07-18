import React, { useState } from 'react';
import axios from 'axios';
import './EmailOtp.css';


const EmailOtpForm = () => {
  const [otp, setOtp] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/verify-emailotp', {
        otp
      });
      if (response.status === 200) {
        alert('OTP verified successfully!');

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

export default EmailOtpForm;