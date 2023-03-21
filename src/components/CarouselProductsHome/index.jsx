import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Brigadeiro from '../Cards/ProductsHome/Brigadeiro';
import Cupuacu from '../Cards/ProductsHome/Cupuacu';
import LeiteNinho from '../Cards/ProductsHome/LeiteNinho';
import OreoComNinho from '../Cards/ProductsHome/OreoComNinho';
import Beijinho from './../Cards/ProductsHome/Beijinho';
import Casadinho from './../Cards/ProductsHome/Casadinho';
import './style.css';


export default function CarouselProductsHome() {
    return (

        <div >
            <Carousel fade >
                <Carousel.Item >
                    <div className='content-cards-products'>
                        <div>
                            <Brigadeiro />
                        </div>
                        <div>
                            <LeiteNinho />
                        </div>
                        <div>
                            <OreoComNinho />
                        </div>
                        <div>
                            <Cupuacu />
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item >
                    <div className='content-cards-products'>
                        <div>
                            <LeiteNinho />
                        </div>
                        <div>
                            <OreoComNinho />
                        </div>
                        <div>
                            <Cupuacu />
                        </div>
                        <div>
                            <Casadinho />
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item >
                    <div className='content-cards-products'>
                        <div>
                            <OreoComNinho />
                        </div>
                        <div>
                            <Cupuacu />
                        </div>
                        <div>
                            <Casadinho />
                        </div>
                        <div>
                            <Beijinho />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
