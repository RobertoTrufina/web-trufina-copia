import React from "react";
import { Link } from 'react-router-dom';

import '../../components/Cards/style.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import './style.css';


export default function Login() {
    return (
        <div className="container-login">
            <Header />
            <h3 className="text-best">Login</h3>

            <div className="content-form-login">
                <form className="form-login">
                    <p className="p-form-login">E-mail ou CPF</p>
                    <input type="text" className="input-form-login" />
                    <Link to="/cadastro">
                        <button className="button-form-login">Login/Cadastre-se</button>
                    </Link>
                </form>
            </div>

            <Footer />
        </div>
    )
}   