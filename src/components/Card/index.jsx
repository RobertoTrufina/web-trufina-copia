import React from "react";
import "./style.css";

import { BsCart, BsHeart, BsStar, BsStarFill } from "react-icons/bs";
import beijinho from "../../imgs/beijinho.png";




export default function Card() {
    return (
        <div id="container-card">
            <div className="favorite">
                <BsHeart style={{   
                    border: "1px solid",
                    borderRadius: "100px",
                    width: "30px",
                    height: "30px",
                    padding: "2px 6px",
                    paddingTop: "5px"
                }} />
            </div>

            <section className="card-product">
                <div className="card-product-item">

                    <img src={beijinho} />
                    <div className="card-title">
                        <span className="card-img-title">Trufa de beijinho <br />50g</span>
                    </div>
                    <div>
                        <span className="card-img-discount">R$ 4,00</span>
                    </div>
                    <div>
                        <span className="card-img-price">R$ 3,40</span>
                    </div>
                    <div>
                        <BsStarFill style={{ color: "yellow" }} />
                        <BsStarFill style={{ color: "yellow" }} />
                        <BsStarFill style={{ color: "yellow" }} />
                        <BsStarFill style={{ color: "yellow" }} />
                        <BsStar style={{ color: "yellow", fontSize: "17px" }} />
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