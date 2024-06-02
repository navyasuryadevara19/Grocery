import React from 'react';
import Banner1 from './images/Banner-img1.jpg'; // Assuming Carousel3 is the path to your image
import NavbarLogin from './NavbarLogin';
import Footer from './Footer';
import './Contact.css';

function Contact() {
  return (
    <div>
        <NavbarLogin/>
        <div>
        <img src={Banner1} alt="" className="carousel-image" style={{ width: '100%', height: '600px' }} />

   <section>
   <h1 className="heading"><span>Contact</span> us</h1>
    <div className='container'>
        <div className="contact-box">
            <div className="left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871542!2d78.40804554999998!3d17.412348700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716801553454!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
            </div>
            <div className="right">
            <form action="">
                <h2>GET IN TOUCH</h2>
                
                <input type="text" className='filed' placeholder='Enter Your Name' required/>
                <input type="email" className='filed' placeholder='Enter Your Email' required/>
                <input type="tel" className='filed' placeholder='Enter Your Phone Number' required/>
                <button type="submit" className="btn">Contact now</button>
                </form>
               
              
            </div>
        </div>
       
    </div>
   
    </section>
    </div>
    <br/><br/><br/>
    <Footer/>
    </div>
  );
}

export default Contact;

