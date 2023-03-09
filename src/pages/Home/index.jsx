import React from "react";
import { Link } from 'react-router-dom';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup/ ';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { BsCart3, BsFacebook, BsInstagram, BsSearch } from 'react-icons/bs';
import CarouselImg from '../../components/CarouselImg';
import CarouselProducts from '../../components/CarouselProducts';

import logoTrufina from '../../imgs/logoTrufina.png';

import './style.css';



function Home() {


  return (

    <>

      <div id='container'>
        <header className='group-btn'>

          {/* logo */}
          <div>
            <img className='img-logo' src={logoTrufina} />
          </div>
          <div>

            {/* Navbar */}
            <ButtonGroup>
              <Button >Home</Button>

              <DropdownButton as={ButtonGroup} title="Nossos Produtos" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" >
                  <Link to="/produtos">Trufas</Link>
                </Dropdown.Item>

                <Dropdown.Item eventKey="2">Geleias</Dropdown.Item>
                <Dropdown.Item eventKey="3">Tortas</Dropdown.Item>
                <Dropdown.Item eventKey="4">Brownies</Dropdown.Item>
              </DropdownButton>
              <Link to="/fale-conosco">
                <Button>Fale Conosco </Button>
              </Link>
            </ButtonGroup>
          </div>

          {/* Search */}
          <div className='content-search'>
            <Form className="d-flex BsSearch" >
              <Form.Control
                type="search"
                placeholder="Pesquisar"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ background: "none" }}>
                <BsSearch style={{ color: "#fff", fontSize: "20px" }} />
              </Button>
            </Form>

            <div>
              <Button style={{ background: "none" }}>
                <BsCart3 style={{ color: "#fff", fontSize: "22px" }} />
              </Button>
            </div>
          </div>
        </header>

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
