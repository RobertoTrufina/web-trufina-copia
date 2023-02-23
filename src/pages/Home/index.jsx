import React from "react";

import { BsCart3 } from 'react-icons/bs';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import logoTrufina from '../../imgs/logoTrufina.png';

import './style.css';


function Home() {

  return (
    <div className="home-container">

      <h1>TESTE</h1>

      <header className="header-content">
        <img src={logoTrufina} />

        <div className="header-navBar-search-cart">

          <nav className="header-content-menu">
            <ul>
              <li className="li-home"><a href="#">Home</a></li>
              <li className="li-products"><a href="#">Nossos Produtos</a>
                <ul>
                  <li><a href="#">Trufas</a></li>
                  <li><a href="#">Geleias</a></li>
                  <li><a href="#">Docinhos</a></li>
                  <li><a href="#">Brownies</a></li>
                  <li><a href="#">Tortas</a></li>
                  <li><a href="#">Bolos</a></li>
                  <li><a href="#">Bem-casado</a></li>
                </ul>
              </li>
              <li className="li-contact"><a href="#">Fale Conosco</a></li>
            </ul>
          </nav>

          <div className="input-input-search-btn">
            <div className="header-input-search">
              <input type="text" placeholder="Buscar Produto"
                autoComplete="on" />
              <button type="submit" className="header-input-btn" title="Pesquisar">
                <HiOutlineMagnifyingGlass color="#928282" size={18} />
              </button>
            </div>
          </div>
          <BsCart3 color="#fff" size={25} title="Compras" />
        </div>

      </header>
    </div>
  )
}

export default Home
