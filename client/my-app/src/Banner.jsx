import React, { useEffect} from 'react';
import './css/Style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Banner = () => {


  useEffect(() => {
    Aos.init({duration:1000});  
  }, []);



  return (
    <div>
       <section className="home" id="home">
        <div className="content" data-aos="fade-up" >
          <h3>Fresh And <span> Organic </span>Products For You</h3>
          <p>This Website Is Designed By Navya So That Everyone Can Learn In An Easy Way That How To Create A Website.</p>
          <a href="/Products" className="btn">shop now</a>
        </div>
      </section>
    </div>
  );
}

export default Banner;
