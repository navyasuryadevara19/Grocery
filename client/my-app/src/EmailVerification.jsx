import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import S2 from './images/S1.jpeg';
import './EmailVerification.css';


const EmailVerification = () => {
    const navigate = useNavigate();
  const [Email, setEmail] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/Send-EmailVerification', {
        Email
      });
      if (response.status === 200) {

        alert('OTP sent successfully');
        navigate('/EmailVerification');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please check your Email.');
    }
  };


return(
<div className="M">
  <div className="P">
  <form id="phoneForm" onSubmit={handleSubmit}>
    <div className="P1">
      <img src={S2} alt="" style={{width:'310px', height: '200px', marginLeft:'-20px'}} /><br/><br />
      <input type="email" id="email" name="Email" value={Email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required/>
    </div>
    <button type="submit">Send VerificationEmail</button>
  </form>
</div>
</div>
  );
}

export default EmailVerification;