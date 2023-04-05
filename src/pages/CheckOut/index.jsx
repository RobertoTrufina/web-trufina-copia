import React from "react";

import '../../components/Cards/style.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import boleto from "../../../src/imgs/boleto.svg";
import brigadeiro from "../../../src/imgs/brigadeiro.png";
import elo from "../../../src/imgs/elo.svg";
import hipercard from "../../../src/imgs/hipercard.svg";
import mastercad from "../../../src/imgs/mastercad.svg";
import visa from "../../../src/imgs/visa.svg";


import './style.css';


export default function CheckOut() {
    return (
        <div className="container-login">
            <Header />

            <main>
                <div className="content-checkout">

                    <section className="section-imgs">
                        <div className="content-imgs-checkout">
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
                            </div>
                            <div className="img-g">
                                <img src={brigadeiro} />
                            </div>

                        </div>

                        <div className="text-description">
                            <h4>Descrição</h4>
                            <p> Delicie-se com esta trufa de brigadeiro! Feita com ingredientes selecionados,
                                esta trufa é coberta com chocolate ao leite e recheada com um brigadeiro cremoso.
                                Uma delícia irresistível para qualquer ocasião! </p>
                        </div>
                    </section>

                    <section >
                        <div className="section-texts-checkout">
                            <div className="title-product-checkout">
                                <h3>Trufa Brigadeiro 50g</h3>
                            </div>
                            <div className="section-texts-checkout-wrap">

                                <div>
                                    <div className="section-texts-checkout-m">
                                        De
                                    </div>
                                    <div className="section-texts-checkout-price">
                                        R$4,00
                                    </div>
                                    <div className="section-texts-checkout-m">
                                        Por
                                    </div>
                                    <h3>
                                        R$ 3,40 <span>15% OFF</span>
                                    </h3>
                                    <div >
                                        <div className="section-texts-checkout-m" >em <span> 3 x 1,13 sem juros</span></div>
                                    </div>
                                </div>
                                <div>
                                    <button className="section-texts-checkout-btn1">
                                        Comprar agora
                                    </button>
                                    <button className="section-texts-checkout-btn2">
                                        Adicionar ao carrinho
                                    </button>

                                </div>
                            </div>


                            <div className="section-texts-checkout-payment">
                                Meios de pagamentos
                                <div className="section-texts-checkout-payment-imgs">
                                    <img src={visa} />
                                    <img src={mastercad} />
                                    <img src={hipercard} />
                                    <img src={elo} />
                                    <img src={boleto} />

                                </div>

                            </div>


                        </div>
                    </section>

                </div>
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