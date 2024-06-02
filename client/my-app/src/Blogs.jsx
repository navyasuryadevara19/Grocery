import React, {useEffect} from 'react';
import './css/Style.css'; // Assuming your CSS file is named Style.css
import Aos from 'aos';
import 'aos/dist/aos.css';
import blog1 from './images/blog-1.jpg';
import blog2 from './images/blog-2.jpg';
import blog3 from './images/blog-3.jpg';
import Banner from './Banner';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';

function Blogs() {

  useEffect(() => {
    Aos.init({duration:1000});  
  }, []);


  return (
    <div>
     <NavbarLogin/>
     <Banner/>

      <section className="blogs" id="blogs">
        <h1 className="heading" data-aos="fade-up">Our <span>Blogs</span></h1>
          
        <div className="box-container">
          <div className="box" data-aos="flip-right">
            <img src={blog1} alt="Blog 1" />
            <div className="content">
              <div className="icons">
                <a href="/"><i className='fa fa-user'></i>By User</a>
                <a href="/"><i className='fa fa-calendar'></i>1st May, 2021</a>
              </div>
              <h3>Fresh And Organic Vegetables And Fruits</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
              <a href="/" className="btn">read more</a>
            </div>
          </div>

          <div className="box" data-aos="flip-right">
            <img src={blog2} alt="Blog 2" />
            <div className="content">
              <div className="icons">
              <a href="/"><i className='fa fa-user'></i>By User</a>
                <a href="/"><i className='fa fa-calendar'></i>1st May, 2021</a>
              </div>
              <h3>Fresh And Organic Vegetables And Fruits</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
              <a href="/" className="btn">read more</a>
            </div>
          </div>

          <div className="box" data-aos="flip-right">
            <img src={blog3} alt="Blog 3" />
            <div className="content">
              <div className="icons">
              <a href="/"><i className='fa fa-user'></i>By User</a>
                <a href="/"><i className='fa fa-calendar'></i>1st May, 2021</a>
              </div>
              <h3>Fresh And Organic Vegetables And Fruits</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
              <a href="/" className="btn">read more</a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Blogs;
