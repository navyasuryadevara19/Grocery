import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Features from './Features.jsx';
import Products from './Products.jsx';
import Categories from './Categories.jsx';
import Review from './Review.jsx';
import Blogs from './Blogs.jsx';
import Signup from './Signup.jsx';
import Carousel from './Carousel.jsx';
import NavbarLogin from './NavbarLogin.jsx';
import Contact from './Contact.jsx';
import VerifyEmail from './Verifyemail.jsx';
import PhoneNumberForm from './phoneNumberForm.jsx';
import OtpForm from './OtpVerification.jsx';
import EmailVerification from './EmailVerification.jsx';
import EmailOtpForm from './EmailOtpVerification.jsx';
import LoginVerify from './LoginVerify.jsx';
import LoginOtpForm from './LoginOtpVerify.jsx';
import PasswordVerification from './ResetPasswordEmail.jsx';
import PasswordOtpForm from './ResetPasswordOtp.jsx';
import ResetPassword from './ResetPassword.jsx';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Categories" element={<Categories/>} />
        <Route path="/Review" element={<Review/>} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/NavbarLogin" element={<NavbarLogin/>} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route path="/Phonenumber" element={<PhoneNumberForm />} />
        <Route path="/otpVerification" element={<OtpForm />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/EmailOtpVerification" element={<EmailOtpForm />} />
        <Route path="/LoginVerification" element={<LoginVerify />} />
        <Route path="/LoginOtpVerification" element={<LoginOtpForm />} />
        <Route path="/PasswordVerification" element={<PasswordVerification />} />
        <Route path="/PasswordOtpVerification" element={<PasswordOtpForm />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;












{/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Features from './Features.jsx';
import Products from './Products.jsx';
import Categories from './Categories.jsx';
import Review from './Review.jsx';
import Blogs from './Blogs.jsx';
import Signup from './Signup.jsx';
import Carousel from './Carousel.jsx';
import NavbarLogin from './NavbarLogin.jsx';
import Contact from './Contact.jsx';
import VerifyEmail from './Verifyemail.jsx';
import PhoneNumberForm from './phoneNumberForm.jsx';
import OtpForm from './OtpVerification.jsx';
import EmailVerification from './EmailVerification.jsx';
import EmailOtpForm from './EmailOtpVerification.jsx';
import LoginVerify from './LoginVerify.jsx';
import LoginOtpForm from './LoginOtpVerify.jsx';
import PasswordVerification from './ResetPasswordEmail.jsx';
import PasswordOtpForm from './ResetPasswordOtp.jsx';
import ResetPassword from './ResetPassword.jsx';

// PrivateRoute component
const PrivateRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? element : <Navigate to="/NavbarLogin" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<PrivateRoute isLoggedIn={isLoggedIn} element={<Features />} />} />
        <Route path="/Products" element={<PrivateRoute isLoggedIn={isLoggedIn} element={<Products />} />} />
        <Route path="/Categories" element={<PrivateRoute isLoggedIn={isLoggedIn} element={<Categories />} />} />
        <Route path="/Review" element={<PrivateRoute isLoggedIn={isLoggedIn} element={<Review />} />} />
        <Route path="/Blogs" element={<PrivateRoute isLoggedIn={isLoggedIn} element={<Blogs />} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/NavbarLogin" element={<NavbarLogin handleLogin={handleLogin} />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route path="/Phonenumber" element={<PhoneNumberForm />} />
        <Route path="/otpVerification" element={<OtpForm />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/EmailOtpVerification" element={<EmailOtpForm />} />
        <Route path="/LoginVerification" element={<LoginVerify />} />
        <Route path="/LoginOtpVerification" element={<LoginOtpForm />} />
        <Route path="/PasswordVerification" element={<PasswordVerification />} />
        <Route path="/PasswordOtpVerification" element={<PasswordOtpForm />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;  */}

