import React from 'react';
import veg2 from './images/veg2.jpg';
import Carousel2 from './images/Carousel2.jpg';
import veg3 from './images/veg3.jpg';
import A4 from './images/A4.jpg';
import veg1 from './images/veg1.jpg';
import NavbarLogin from './NavbarLogin';
import Footer from './Footer';
const Carousel = () => {

  const headingStyle = {
    textAlign: 'center',
    padding: '2rem 0',
    paddingBottom: '3rem',
    fontSize: '3.5rem',
    color: 'var(--black)', // Assuming you have defined the variable --black somewhere
  };

  const spanStyle = {
    background: 'var(--green)', // Assuming you have defined the variable --green somewhere
    color: '#fff',
    display: 'inline-block',
    padding: '.5rem 3rem',
    clipPath: 'polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)',
  };

  return (
    <div>
      <NavbarLogin/>
     
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={veg2} className="d-block w-100" height={650} alt=" "/>
      <div className="carousel-caption d-none d-md-block">
        <h2>FRESH VEGETABLES FOR YOU</h2>
        <p style={{ color: 'black', fontSize: '15px' }}>Fresh from the farm, straight to your plate.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={Carousel2} className="d-block w-100" height={650} alt=" "/>
      <div className="carousel-caption d-none d-md-block">
      <h2>FRESH STRAWBERRY FOR YOU</h2>
        <p style={{ color: 'black', fontSize: '15px' }}>Fresh fruits for every Occasion.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={veg3} className="d-block w-100" height={650} alt=" "/>
      <div className="carousel-caption d-none d-md-block">
        <h2>FRESH FRUITS FOR YOU</h2>
        <p style={{ color: 'black', fontSize: '15px' }}>Taste the goodness of nature.</p>
      </div>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br/>
<br/>

<div className='B'>
<h2 style={headingStyle}>OUR<span style={spanStyle}>OFFER</span></h2>

</div>
<section>

<div className="row g-0 bg-light position-relative">
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src={A4} height={350} width={600} alt="..."/>
  </div>
  <div className="col-md-6 p-4 ps-md-0" style={{backgroundColor: '#fff'}}>
    <h2  className="mt-0" style={{color: 'green', textAlign: 'center'}}>Flat 30% off on Fish Meat | GRAB IT SOON</h2><br/><br />
    <p style={{fontSize: '15px'}}>Fish are an important part of a healthy, well-balanced diet. They provide a good source of protein and vitamins, and are a primary dietary source of heart-healthy omega-3 fatty acids.

Omega-3 fatty acids can:
lower risk of heart disease
lower triglyceride levels
slow the growth of plaque in your arteries
and slightly lower blood pressure
Omega-3 fatty acids may also provide health benefits to developing babies.
Pregnant and breastfeeding women can pass this nutrient to their baby by eating the right kind of fish.
Fish species that have higher levels of omega-3s are shown with a heart icon (heart healthy) when OEHHA recommends that they can be eaten at least once a week.</p>
    <a href="/Categories" className="stretched-link" style={{fontSize: '15px'}}>Go Here</a>
  </div>
</div>
</section>


<section>

<div className="row g-0 bg-light position-relative">
  <div className="col-md-6 mb-md-0 p-md-4">
    <img src={veg1} height={350} width={600} alt="..."/>
  </div>
  <div className="col-md-6 p-4 ps-md-0" style={{backgroundColor: '#fff'}}>
    <h2  className="mt-0" style={{color: 'green', textAlign: 'center'}}>Flat 20% off on Vegitables | GRAB IT SOON</h2><br/><br />
    <p style={{fontSize: '15px'}}>A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer, lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check.</p>
    <br/>
    <p style={{fontSize: '15px'}}>Fruits and vegetables are a great source of vitamins and minerals. You won’t find a better nutritional source than fruits and veggies, which are packed with vitamins A, C and E, as well as magnesium, zinc, phosphorous and folic acid. For potassium, one of the most important minerals for your health, eat plenty of avocados, sweet potatoes, bananas, prunes and even tomato paste puree.</p>
    <a href="/Categories" className="stretched-link" style={{fontSize: '15px'}}>Go Here</a>
  </div>
</div>
</section>

<Footer/>
    </div>





  );
}

export default Carousel;




