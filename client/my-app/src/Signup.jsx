import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Make sure to import your CSS file
import axios from 'axios';
import DOMPurify from 'dompurify';
import CryptoJS from 'crypto-js';


function Signup() {


    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();



  const validateEmail = (Email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(Email);
  };
  const checkPasswordStrength = (Password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(Password);
  };



    const sendVerificationEmail = async (Email) => {
        try {
          const response = await axios.post('http://localhost:5000/Sendverification', { Email });
          console.log(response.data.message);
          // show a success message to the user
        } catch (error) {
          console.error(error);
          // show an error message to the user
        }
      }
   

    const handleUsername = (event) => {
        const sanitizedValue = DOMPurify.sanitize(event.target.value);
        setUsername(sanitizedValue);
    };

    const handleEmail = (event) => {
        const sanitizedValue = DOMPurify.sanitize(event.target.value);
        setEmail(sanitizedValue);
    };

    const handlePassword = (event) => {
        const sanitizedValue = DOMPurify.sanitize(event.target.value);
        setPassword(sanitizedValue);
    };

    const handleConfirmPassword = (event) => {
        const sanitizedValue = DOMPurify.sanitize(event.target.value);
        setConfirmPassword(sanitizedValue);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      

const sanitizedUsername = DOMPurify.sanitize(Username);
const sanitizedEmail = DOMPurify.sanitize(Email);
const sanitizedPassword = DOMPurify.sanitize(Password);
const sanitizedConfirmPassword = DOMPurify.sanitize(ConfirmPassword);

if (validateEmail(Email) && checkPasswordStrength(Password)) {
const salt = CryptoJS.lib.WordArray.random(16); // Generate a random 16-byte salt
const saltedPassword = salt + sanitizedPassword; // Add the salt to the password
const encryptedPassword = CryptoJS.SHA256(saltedPassword).toString();

const saltedConfirmPassword = salt + sanitizedConfirmPassword; // Add the salt to the password
const encryptedConfirmPassword = CryptoJS.SHA256(saltedConfirmPassword).toString();

      axios.post('http://localhost:5000/Signin', {

    
                Username: sanitizedUsername,
                Email: sanitizedEmail,
                Password: encryptedPassword,
                ConfirmPassword: encryptedConfirmPassword,
                salt: salt.toString(),


            }).then((response) => {
              if(response.data.message){
                  
              }else{
      
              }
          });}

          if (validateEmail(Email) && checkPasswordStrength(Password)) {
            sendVerificationEmail(sanitizedEmail); // send the verification email
            window.alert("Please check your email for verification.");
            navigate('/'); 
            }
        }

  return (
    <div className='A'>
    <div className = "wrapper">
      <form action="" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="input-box">
          <input type="text" value={Username} placeholder="Username" onChange={handleUsername} required />
          <i className='fa fa-user'></i>
        </div>

        <div className="input-box">
          <input type="email" value={Email} placeholder="Email" onChange={handleEmail} required />
          <i className='fa fa-envelope'></i>
        </div>

        <div className="input-box">
          <input type="password" value={Password} placeholder="Password" onChange={handlePassword} required />
          <i className='fa fa-lock'></i>
        </div>

        <div className="input-box">
          <input type="password" value={ConfirmPassword} placeholder="Confirm Password" onChange={handleConfirmPassword} required />
          <i className='fa fa-lock'></i>
        </div>

        <div className="remember-forgot">
          <label htmlFor=""><input type="checkbox" />I agree terms & conditions</label>
        </div>
        <button type="submit">Signup</button>
        <div className="login-link">
          <p>Already have an account?<a href="/">Login</a></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;

