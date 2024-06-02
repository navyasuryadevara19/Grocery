import React, {useEffect} from 'react';
import './css/Style.css'; // Import your CSS file
import Aos from 'aos';
import 'aos/dist/aos.css';
import featureImg1 from './images/feature-img-1.png'; // Import feature images
import featureImg2 from './images/feature-img-2.png';
import featureImg3 from './images/feature-img-3.png';
import Footer from './Footer';
import Banner from './Banner';
import NavbarLogin from './NavbarLogin.jsx';



function Features() {

  useEffect(() => {
    Aos.init({duration:1000});  
  }, []);

  return (
    <div>
<NavbarLogin/>
<Banner/>
      <section className="features" id="features">
        <h1 className="heading" data-aos="fade-up">Our <span>Features</span></h1>
        <div className="box-container">
          <div className="box" data-aos="flip-left">
            <img src={featureImg1} alt="Fresh And Organic" />
            <h3>Fresh And Organic</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="/Contact" className="btn">Read More</a>
          </div>
          <div className="box" data-aos="flip-left">
            <img src={featureImg2} alt="Free Delivery" />
            <h3>Free Delivery</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="/Contact" className="btn">Read More</a>
          </div>
          <div className="box" data-aos="flip-left">
            <img src={featureImg3} alt="Easy Payments" />
            <h3>Easy Payments</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href="/Contact" className="btn">Read More</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Features;
