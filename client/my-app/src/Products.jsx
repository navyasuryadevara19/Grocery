import React, {useEffect} from 'react';
import Swiper from 'swiper';
import './css/Style.css'; // Import your CSS file
import Aos from 'aos';
import 'aos/dist/aos.css';
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import product4 from './images/product-4.png';
import product5 from './images/product-5.png';
import product6 from './images/product-6.png';
import product7 from './images/product-7.png';
import product8 from './images/product-8.png';
import Banner from './Banner';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';


function Products() {

    useEffect(() => {

        // Initialize Swiper for product slider
      var swiper = new Swiper(".product-slider", {
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
                1024: {
                    slidesPerView: 4,
                },
            },
        }); 
       
    }, []);


    useEffect(() => {
        Aos.init({duration:1000});  
    }, []);


  return (
    <div>
<NavbarLogin/>
<Banner/>
      <section class="products" id="products">
        <h1 class="heading" data-aos="fade-up">Our<span>Products</span></h1>
       
        <div class="swiper product-slider" data-aos="flip-up">
            <div class="swiper-wrapper">
    
    
                <div class="swiper-slide box">
                    <img src={product1}/>
                    <h1>Fresh Orange</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>


                <div class="swiper-slide box">
                    <img src={product2}/>
                    <h1>Fresh Onion</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>


                <div class="swiper-slide box">
                    <img src={product3}/>
                    <h1>Fresh Meat</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>

                <div class="swiper-slide box">
                    <img src={product4}/>
                    <h1>Fresh Cabbage</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>



        </div>
     </div>





     <div class="swiper product-slider" data-aos="flip-up">
            <div class="swiper-wrapper">
    
    
                <div class="swiper-slide box">
                    <img src={product5} alt="potato"/>
                    <h1>Fresh Potato</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>


                <div class="swiper-slide box">
                    <img src={product6} alt="Avacado"/>
                    <h1>Fresh Avacado</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>


                <div class="swiper-slide box">
                    <img src={product7} alt="Carrot"/>
                    <h1>Fresh Carrot</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>

                <div class="swiper-slide box">
                    <img src={product8} alt="Lemon"/>
                    <h1>Fresh Lemon</h1>
                    <div class="price">$12.99/- - 15.99/-</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                    </div>
                    <a href="/" class="btn">Add To Cart</a>
                </div>



        </div>
     </div>

</section>
      <Footer/>
    </div>
  );
}

export default Products;
