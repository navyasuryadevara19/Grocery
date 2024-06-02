import React, { useEffect } from 'react';
import './css/Style.css'; // Import your CSS file
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer.jsx'
import NavbarLogin from './NavbarLogin.jsx';
import G1 from './images/G1.jpg';
import G2 from './images/G2.jpg';
import G3 from './images/G3.jpg';
import M1 from './images/meat.jpg';
import F1 from './images/F1.jpg';
import J1 from './images/J1.jpg';

function Home() {

  useEffect(() => {
    Aos.init({duration:1000});  
  }, []);

  return (
    
    <div>
       
 <NavbarLogin/>
      <section className="home" id="home">
        <div className="content" data-aos="fade-up">
       
          <h3>
            Fresh And <span> Organic </span>Products For You
          </h3>
          <p>
            This Website Is Designed By Navya So That Everyone Can Learn In An
            Easy Way That How To Create A Website.
          </p>
          <a href="/Products" className="btn">
            shop now
          </a>
        </div>
      </section>

      <section className="home1" id="home1">
        <h1 className="heading" data-aos="fade-up"><span>Grocery</span></h1>


        <div className="box-container1" data-aos="fade-up">

          <div className="box">
            <img src={G1} alt="Snacks"/>
            <h3>Snacks</h3>
          </div>

          <div className="box">
            <img src={G2} alt="Vegitables"/>
            <h3>Vegitables</h3>
          </div>

          <div className="box">
            <img src={G3} alt="Dry Fruits" />
            <h3>Dry FRuits</h3>
          </div>
  
        </div>
</section>

        <section className="home1" id="home1">
        <div className="box-container1" data-aos="fade-up">

<div className="box">
  <img src={F1} alt="Fruits" style={{width:'400px'}}/>
  <h3>Fruits</h3>
</div>

<div className="box">
  <img src={M1} alt="Meat" style={{width:'400px'}}/>
  <h3>Meat</h3>
</div>

<div className="box">
  <img src={J1} alt="Jucies" style={{width:'400px'}}/>
  <h3>Juices</h3>
</div>

</div>

      </section>
      
      <Footer/>
    </div>
  );
 
}

export default Home;
