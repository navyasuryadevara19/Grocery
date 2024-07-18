import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import cartImage1 from './images/cart-img-1.png';
import cartImage2 from './images/cart-img-2.png';
import cartImage3 from './images/cart-img-3.png';



const NavbarLogin = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = (event) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setEmail(sanitizedValue);
  };

  const handlePassword = (event) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setPassword(sanitizedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sanitizedEmail = DOMPurify.sanitize(Email);
    const sanitizedPassword = DOMPurify.sanitize(Password);

    axios.post('http://localhost:5000/Login', {
      Email: sanitizedEmail,
      Password: sanitizedPassword,
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.message);
       setTimeout(() => navigate('/Carousel'), 1000);
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .catch((error) => {
      console.error(error);
      if (error.response?.status === 401) {
        window.alert('Email not verified. Please verify your email before logging in.');
      } else if (error.response?.status === 400) {
        window.alert('Account is not Identified. Please Signup');
      } else {
        window.alert('Invalid Username or Password');
      }
   
      //else if (error.response?.status === 401) {
        //console.log('Invalid UserName or Password');
     // }
    });
  };

  useEffect(() => {
    // Define variables for different elements
    const searchForm = document.querySelector('.search-form');
    const shoppingCart = document.querySelector('.shopping-cart');
    const loginForm = document.querySelector('.login-form');
    const navbar = document.querySelector('.navbar');

    // Toggle search form visibility on search button click
    document.querySelector('#search-btn').onclick = () => {
      searchForm.classList.toggle('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    };

    // Toggle shopping cart visibility on cart button click
    document.querySelector('#cart-btn').onclick = () => {
      searchForm.classList.remove('active');
      shoppingCart.classList.toggle('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    };

    // Toggle login form visibility on login button click
    document.querySelector('#login-btn').onclick = () => {
      searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.toggle('active');
      navbar.classList.remove('active');
    };

    // Toggle navbar visibility on menu button click
    document.querySelector('#menu-btn').onclick = () => {
      searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.toggle('active');
    };

    // Close all elements when scrolling
    window.onscroll = () => {
      searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <header className="header">
        <a href="/" className="logo" data-aos="fade-right"><i className="fa fa-shopping-basket"></i>Grocery</a>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/Features">Features</a>
          <a href="/Products">Products</a>
          <a href="/Categories">Categories</a>
          <a href="/Review">Review</a>
          <a href="/Blogs">Blogs</a>
        </nav>
        <div className="icons" data-aos="fade-left">
          <div className="fa fa-bars" id="menu-btn"></div>
          <div className="fa fa-search" id="search-btn"></div>
          <div className="fa fa-shopping-cart" id="cart-btn"></div>
          <div className="fa fa-user" id="login-btn"></div>
        </div>
        <form className="search-form">
          <input type="search" id="search-box" placeholder="Search Here...." />
          <label htmlFor="search-box" className="fa fa-search"></label>
        </form>

        <div className="shopping-cart">
          <div className="box">
            <i className='fa fa-trash'></i>
            <img src={cartImage1} alt="Watermelon" />
            <div className="content">
              <h3>Watermelon</h3>
              <span className="price">$5.99/-</span>
              <span className="quantity">Qty : 1</span>
            </div>
          </div>
          <div className="box">
            <i className='fa fa-trash'></i>
            <img src={cartImage2} alt="Onion" />
            <div className="content">
              <h3>Onion</h3>
              <span className="price">$4.99/-</span>
              <span className="quantity">Qty : 1</span>
            </div>
          </div>
          <div className="box">
            <i className='fa fa-trash'></i>
            <img src={cartImage3} alt="Chicken" />
            <div className="content">
              <h3>Chicken</h3>
              <span className="price">$7.99/-</span>
              <span className="quantity">Qty : 1</span>
            </div>
          </div>
          <div className="total">total : $18.97</div>
          <a href="/" className="btn">Checkout</a>
        </div>

        <form action="#" className="login-form" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <input
            type="email"
            value={Email}
            placeholder="Email"
            className="box"
            onChange={handleEmail}
            required
          />
          <input
            type="password"
            value={Password}
            placeholder="Password"
            className="box"
            onChange={handlePassword}
            required
          />
          <p>Forgot Your Password <a href="/PasswordVerification">Click Here</a></p>
          <p>Don't Have An Account <a href="/Signup">Signup</a></p>
          <input type="submit" value="Login" className="btn" />
        </form>
      </header>
    </div>
  );
}

export default NavbarLogin;