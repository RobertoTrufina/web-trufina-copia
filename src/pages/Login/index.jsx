import React from "react";
import '../../components/Cards/style.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import './style.css';


export default function Login() {
    return (
        <div className="container-login">
            <Header />
            <h3 className="text-best">Login</h3>


            <div className="content-login">
                <div className="wrap-login">
                    <p>E-mail ou CPF</p>
                    <input type="text" />
                    <button>Login / Cadastre-se</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}   