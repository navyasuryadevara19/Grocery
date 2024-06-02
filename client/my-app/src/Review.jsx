import React, {useEffect} from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './css/Style.css'; // Assuming your CSS file is named Style.css
import Aos from 'aos';
import 'aos/dist/aos.css';
import review1 from './images/pic-1.png';
import review2 from './images/pic-2.png';
import review3 from './images/pic-3.png';
import review4 from './images/pic-4.png';
import Banner from './Banner';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';

function Review() {

  useEffect(() => {
    Aos.init({duration:1000});  
  }, []);

  useEffect(() => {
   
    var swiper = new Swiper(".review-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
          delay: 7500,
          disableOnInteraction: false,
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,          
          },
          1020: {
              slidesPerView: 3,
          },
      },
  });


}, []);


  return (
    <div>
     <NavbarLogin/>
     <Banner/>

      <section className="review" id="review">
        <h1 className="heading" data-aos="fade-up">Customer's <span>Review</span></h1>
        <div className="swiper review-slider" data-aos="fade-up">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src={review1} alt="review1"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <h3>Jhon Deo</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src={review2} alt="review2"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <h3>Jhon Deo</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src={review3} alt="review3"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <h3>Jhon Deo</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src={review4} alt="review4"/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <h3>Jhon Deo</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer/>
    </div>
  );
}

export default Review;

