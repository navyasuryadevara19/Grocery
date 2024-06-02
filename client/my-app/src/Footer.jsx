import React, {useEffect} from 'react';
import './css/Style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import paymentimg from './images/payment.png';

const Footer = () => {

  useEffect(() => {
    Aos.init({duration:1000});  
  }, []);

  return (
    <div>
       <section className="footer">
        <div className="box-container" data-aos="fade-up">
          <div className="box">
            <h3> Groco <i className="fa fa-shopping-basket"></i></h3>
            <p>Feel Free To Follow Us On Our Social Media Handlers All The Links Are Given Below.</p>
            <div className="share">
              <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
              <a href="https://twitter.com/" className="fa fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
              <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <h3> Contact Info</h3>
            <a href="/" className="links"><i className="fa fa-phone"></i>+91 6304486735</a>
            <a href="/" className="links"><i className="fa fa-phone"></i>+91 9953842495</a>
            <a href="/" className="links"><i className="fa fa-envelope"></i> navya@example.com</a>
            <a href="/" className="links"><i className="fa fa-map-marker"></i>Hyderabad, India</a>
          </div>
          <div className="box">
            <h3> Quick Links</h3>
            <a href="/" className="links"><i className="fa fa-arrow-right"></i>Home</a>
            <a href="/Features" className="links"><i className="fa fa-arrow-right"></i>Features</a>
            <a href="/Products" className="links"><i className="fa fa-arrow-right"></i>Products</a>
            <a href="/Categories" className="links"><i className="fa fa-arrow-right"></i>Categories</a>
            <a href="/Review" className="links"><i className="fa fa-arrow-right"></i>Review</a>
            <a href="/Blogs" className="links"><i className="fa fa-arrow-right"></i>Blogs</a>
          </div>
          <div className="box">
            <h3> Newsletter</h3>
            <p>Subscribe For Latest Updates</p>
            <input type="email" placeholder="Your Email" className="email"/>
            <input type="submit" value="Subscribe" className="btn"/>
            <img src={paymentimg} alt="payment" className="payment-img"/>
          </div>
        </div>
        <div className="credit">Created By <span>Navya</span> | All Rights Reserved</div>
      </section>
    </div>
  );
}

export default Footer;
