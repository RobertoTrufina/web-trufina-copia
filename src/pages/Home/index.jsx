import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../../global.css';
import CarouselProductsHome from './../../components/CarouselProductsHome/index';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImg from '../../components/CarouselImg';



function Home() {

  return (


    <div>

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
