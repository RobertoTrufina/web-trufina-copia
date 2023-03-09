import React from "react";


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import CarouselImg from '../../components/CarouselImg';
import CarouselProducts from '../../components/CarouselProducts';


import Header from "../../components/Header";
import './style.css';



function Home() {


  return (

    <>

      <div id='container'>

        <Header />

        {/* image carousel */}
        <CarouselImg />

        {/* product carousel */}
        <CarouselProducts />

      </div >

      <footer>

        <div>
          <div className="footer-text-network">
            SIGA-NOS
          </div>
          <div className="footer-img-network">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
          </div>
        </div>

        <p>© Copyright 2023. Todos os direitos reservados. Trufina Chocollates Eireli CNPJ 23.129.040/0001-33
          Desenvolvedor Roberto Pinto

        </p>

      </footer>
    </>

  )
}

export default Home
