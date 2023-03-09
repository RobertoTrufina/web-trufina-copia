import React from "react";
import './styles.css';

import { BsFacebook, BsInstagram } from 'react-icons/bs';


export default function Footer() {
    return (
        <div>
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
        </div>
    )
}