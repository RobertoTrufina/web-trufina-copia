import React from 'react';
import './style.css';
import { BsCart, BsHeart, BsStar, BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import trufaItem from '../../trufas.json';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


export default function CarouselProductsHome() {
    // {trufasFiltradas.map((trufas) => (
    //     { trufas }
    // ))}

    const responsive = {
        0: { items: 1 },
        540: { items: 2 },
        860: { items: 3 },
        1000: { items: 4 },
        1320: { items: 5 },
    };

    const items = [
        <div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
        <div className="item" data-value="5">5</div>,
        <div className="item" data-value="6">6</div>,
    ];


    return (

        <div className='items-carousel' >
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            >

                {trufaItem.data.map((trufa) => (
                    <div className='content-cards-products'>

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

                    </div>
                ))}



            </AliceCarousel>
        </div>


    );
}
