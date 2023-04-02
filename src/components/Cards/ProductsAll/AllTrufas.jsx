import React from "react";
import { Link } from 'react-router-dom';

import "../style.css";

// Bootstrap
import { BsCart, BsHeart, BsStar, BsStarFill } from "react-icons/bs";
import trufaItem from '../../../trufas.json';


export default function AllTrufas() {
    return (
        
        trufaItem.data.map((trufa) => (

            <div id="container-card" key={trufa.id}>
                <div className="favorite">
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

                        <img src={trufa.img} />
                        <div className="card-title">
                            <span className="card-img-title">{trufa.name} <br />{trufa.peso}</span>
                        </div>
                        <div>
                            <span className="card-img-discount">R$ 4,00</span>
                        </div>
                        <div>
                            <span className="card-img-price">R$ {trufa.preço}</span>
                        </div>
                        <div>
                            <BsStarFill style={{ color: "#ff9800" }} />
                            <BsStarFill style={{ color: "#ff9800" }} />
                            <BsStarFill style={{ color: "#ff9800" }} />
                            <BsStarFill style={{ color: "#ff9800" }} />
                            <BsStar style={{ color: "#ff9800", fontSize: "17px" }} />
                        </div>

                        <div className="card-img-btn-cart">
                            <Link to="/beijinho">
                                <div className="btn-cart-content">
                                    <BsCart /> adicionar <br /> ao carrinho
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>


            </div>

        ))
    )
}