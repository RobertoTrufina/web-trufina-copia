import React from "react";
import Header from "../../components/Header";
import "./styles.css";

import caldaChocolate from "../../imgs/caldaChocolate.png";
import contactUs from "../../imgs/contactUs.png";


// Bootstrap
import Button from 'react-bootstrap/Button';
import Footer from "../../components/Footer";


export default function Contact() {
    return (

        <div id="container">

            <Header />


            <div className="wrap-contact">


                <div className="content-contact">

                    <div className="wrap-contact">
                        <h1>CONTATO</h1>
                        <form className="form-contact">
                            <input type="text" placeholder="Nome" required />
                            <input type="email" placeholder="Email" required />
                            <textarea name="text" placeholder="Mensagem" id="" cols="30" rows="5" ></textarea>
                            <Button variant="secondary">ENVIAR</Button>{' '}

                            <img className="img-contact" src={contactUs} />
                        </form>

                    </div>


                    <div className="form-img-chocolate">
                        <img className="img-chocolate" src={caldaChocolate} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}