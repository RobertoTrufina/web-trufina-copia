import React from "react";
import "../style.css";

// Bootstrap
import { BsCart, BsHeart, BsStar, BsStarFill } from "react-icons/bs";

import oreo_com_ninho from "../../../imgs/oreo_com_ninho.jpg";



export default function OreoComNinho() {
    return (
        <div id="container-card">
            <div className="favorite">
                <p>3º</p>
                <a href="#">
                    <BsHeart style={{
                        border: "1px solid",
                        borderRadius: "100px",
                        width: "30px",
                        height: "30px",
                        padding: "2px 6px",
                        paddingTop: "5px"
                    }} />
                </a>
            </div>

            <section className="card-product">
                <div className="card-product-item">

                    <img src={oreo_com_ninho} />
                    <div className="card-title">
                        <span className="card-img-title">Trufa de óreo c/ ninho <br />50g</span>
                    </div>
                    <div>
                        <span className="card-img-discount">R$ 4,00</span>
                    </div>
                    <div>
                        <span className="card-img-price">R$ 3,40</span>
                    </div>
                    <div>
                        <BsStarFill style={{ color: "#ff9800" }} />
                        <BsStarFill style={{ color: "#ff9800" }} />
                        <BsStarFill style={{ color: "#ff9800" }} />
                        <BsStarFill style={{ color: "#ff9800" }} />
                        <BsStar style={{ color: "#ff9800", fontSize: "17px" }} />
                    </div>

                    <div className="card-img-btn-cart">
                        <a href="#">
                            <div className="btn-cart-content">
                                <BsCart /> adicionar <br /> ao carrinho
                            </div>
                        </a>

                    </div>
                </div>
            </section>


        </div>

    )
}