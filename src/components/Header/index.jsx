import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import TrufasContext from '../../context/TrufasContext';
import './style.css';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup/ ';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { BsCart3, BsPersonCircle, BsSearch } from 'react-icons/bs';

import logoTrufina from '../../imgs/logoTrufina.png';





export default function Header() {
    const { busca, setBusca } = useContext(TrufasContext)

    return (

        <header className='group-btn'>

            {/* logo */}
            <Link to="/">
                <img className='img-logo' src={logoTrufina} />
            </Link>

            <div>
                {/* Navbar */}
                <ButtonGroup>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>

                    <DropdownButton as={ButtonGroup} title="Nossos Produtos" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1" >
                            <Link to="/trufas">Trufas</Link>
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="2">
                            <Link to="/geleias">Geleias</Link>
                        </Dropdown.Item>

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
                        type="text"
                        placeholder="Pesquisar"
                        className="me-1"
                        aria-label="Search"
                        style={{ boxShadow: "0 0 0 0", width: "250px", borderRadius: "30px" }}
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />

                    <Button style={{ background: "none" }}>
                        <BsSearch style={{ color: "#fff", fontSize: "20px" }} />
                    </Button>
                </Form>

                <div className="header-search-register">
                    <Link to="/login">
                        <Button style={{ background: "none", display: "flex" }}>
                            <BsPersonCircle style={{ color: "#fff", fontSize: "22px", marginRight: "5px" }} />
                            <span>Entrar</span>
                        </Button>
                    </Link>
                    <Link to="/checkout">
                        <Button style={{ background: "none" }}>
                            <BsCart3 style={{ color: "#fff", fontSize: "22px" }} />
                        </Button>
                    </Link>

                </div>
            </div>
        </header>
    )
}
