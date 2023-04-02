import React from "react";

import '../../components/Cards/style.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import brigadeiro from "../../../src/imgs/brigadeiro.png";

import './style.css';


export default function CheckOut() {
    return (
        <div className="container-login">
            <Header />

            <main>
                <section className="section-imgs">
                    <div className="wrap-imgs">
                        <div className="img-p">
                            <img src={brigadeiro} />
                        </div>
                        <div className="img-p">
                            <img src={brigadeiro} />
                        </div>
                        <div className="img-p">
                            <img src={brigadeiro} />
                        </div>
                        <div className="img-p">
                        </div>
                    </div>

                    <div className="wrap-imgs">
                        <div className="img-g">
                            <img src={brigadeiro} />
                        </div>
                    </div>

                </section>
            </main>
            {/* <h3 className="text-best">Trufa de brigadeiro</h3>

            <div className="content-form-login">
                <form className="form-login">
                    <p className="p-form-login">E-mail ou CPF</p>
                    <input type="text" className="inp   ut-form-login" />
                    <Link to="/cadastro">
                        <button className="button-form-login">Login/Cadastre-se</button>
                    </Link>
                </form>
            </div> */}

            <Footer />
        </div>
    )
}   