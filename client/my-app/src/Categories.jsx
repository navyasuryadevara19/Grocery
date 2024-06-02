import React, {useEffect} from 'react';
import './css/Style.css'; // Import your CSS file
import Aos from 'aos';
import 'aos/dist/aos.css';
import cat1 from './images/cat-1.png';
import cat2 from './images/cat-2.png';
import cat3 from './images/cat-3.png';
import cat4 from './images/cat-4.png';
import Footer from './Footer';
import Banner from './Banner';
import NavbarLogin from './NavbarLogin';

function Categories() {

  useEffect(() => {
    Aos.init({duration:1000});  
  }, []);


  return (
    <div>
      <NavbarLogin/>
      <Banner/>
  
      {/* Our Categories section */}
      <section className="categories" id="categories">
        <h1 className="heading" data-aos="fade-up">Product <span>Categories</span></h1>
        <div className="box-container">
          <div className="box" data-aos="flip-right">
            <img src={cat1} alt="Vegetables" />
            <h3>Vegetables</h3>
            <p>Upto 30% off</p>
            <a href="/Products" className="btn">shop now</a>
          </div>
          <div className="box" data-aos="flip-right">
            <img src={cat2} alt="Fresh Fruits" />
            <h3>Fresh Fruits</h3>
            <p>Upto 30% off</p>
            <a href="/Products" className="btn">shop now</a>
          </div>
          <div className="box" data-aos="flip-right">
            <img src={cat3} alt="Dairy Products" />
            <h3>Dairy Products</h3>
            <p>Upto 30% off</p>
            <a href="/Products" className="btn">shop now</a>
          </div>
          <div className="box" data-aos="flip-right">
            <img src={cat4} alt="Fresh Meat" />
            <h3>Fresh Meat</h3>
            <p>Upto 30% off</p>
            <a href="/Products" className="btn">shop now</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Categories;
