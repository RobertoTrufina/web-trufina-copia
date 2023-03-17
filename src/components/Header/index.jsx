import React from "react";
import { Link } from 'react-router-dom';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup/ ';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { BsCart3, BsSearch } from 'react-icons/bs';

import logoTrufina from '../../imgs/logoTrufina.png';


export default function Header() {
    return (

        <header className='group-btn'>

            {/* logo */}
            <div>
                <Link to="/">
                    <img className='img-logo' src={logoTrufina} />
                </Link>
            </div>
            <div>

                {/* Navbar */}
                <ButtonGroup>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>

                    <DropdownButton as={ButtonGroup} title="Nossos Produtos" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1" >
                            <Link to="/produtos">Trufas</Link>
                        </Dropdown.Item>

                        <Dropdown.Item eventKey="2">Geleias</Dropdown.Item>
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
    )
}
