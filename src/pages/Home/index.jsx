import React from "react";
import Header from "../../components/Header";
import CarouselProductsHome from './../../components/CarouselProductsHome/index';
import '../../global.css';
import Footer from "../../components/Footer";


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImg from '../../components/CarouselImg';



function Home() {

  return (


    <div id='container'>

      {/* Header */}
      <Header />

      {/* Images carousel */}
      <CarouselImg />
      <h3 className="text-best">Mais Vendidos</h3>


      <CarouselProductsHome />
      {/* Footer */}
      <Footer />

    </div >



  )
}

export default Home
