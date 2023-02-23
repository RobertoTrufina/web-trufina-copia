import React from "react";
import Header from "../../components/header";

import img1Carrosel from '../../imgs/img2-carrosel.png';

import './style.css';

function Home() {

  return (

    <div className="home-container">

      <Header />

      <main>
        
        <div className="carousel">
          <img src={img1Carrosel} />
          <p className="text1-carousel">Aprecie o que há <br /> de melhor em <br /> nossos recheios</p>
          <p className="text2-carousel">Perfeitas para presente, <br /> festas, sobremesas e em <br /> qualquer ocasião.</p>
        </div>

      </main>
    </div>
  )
}

export default Home
