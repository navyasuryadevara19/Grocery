import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PhoneNumberForm.css';
import S1 from './images/S2.jpg';

const PhoneNumberForm = () => {
    const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passcode] = useState('ASD@12asd');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-otp', {
        phoneNumber,
        passcode
      });
      if (response.status === 200) {

        alert('OTP sent successfully');
        navigate('/otpVerification');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please check your passcode and phone number.');
    }
  };


return(
<div className="M">
  <div className="P">
  <form id="phoneForm" onSubmit={handleSubmit}>
    <div className="P1">
      <img src={S1} alt="" style={{width:'310px', height: '200px', marginLeft:'-20px'}} /><br/><br />
      <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} placeholder='Enter Your Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} required/>
    </div>
    <button type="submit">Send OTP</button>
  </form>
</div>
</div>
  );
}

export default PhoneNumberForm;