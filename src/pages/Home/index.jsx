import React from "react";
import Header from "../../components/Header";
import '../../global.css';
import './style.css';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImg from '../../components/CarouselImg';
import CarouselProducts from '../../components/CarouselProducts';


import Footer from "../../components/Footer";
function Home() {

  return (


    <div id='container'>

      <Header />

      <CarouselImg />
      <h3 className="text-best">Mais Vendidos</h3>
      <CarouselProducts />

      <Footer />

    </div >



  )
}

export default Home
