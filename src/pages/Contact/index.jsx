import React from "react";
import Header from "../../components/Header";

// Bootstrap
import Button from 'react-bootstrap/Button';




export default function Contact() {
    return (

        <div id="container">

            <Header />

            <h1>CONTATO</h1>

            <div>
                <form className="form-contact">
                    <input type="text" className="input-form-contact" placeholder="Nome" required />
                    <input type="email" className="input-form-contact" placeholder="Email" required />
                    <textarea name="text" id="" cols="30" rows="10" ></textarea>
                    <Button variant="secondary">Secondary</Button>{' '}

                    <img src="../../imgs/contact-us.png" alt="" />

                </form>

            </div>
        </div>


    )
}