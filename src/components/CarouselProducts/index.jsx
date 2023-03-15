import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Beijinho from '../CardsHome/beijinho';

import Brigadeiro from '../CardsHome/Brigadeiro';
import Casadinho from '../CardsHome/Casadinho';
import Cupuacu from '../CardsHome/Cupuacu';
import LeiteNinho from '../CardsHome/LeiteNinho';
import OreoComNinho from '../CardsHome/OreoComNinho';

import './style.css';


function CarouselProducts() {
    return (

        <div className='grid-container-carousel-products'>
            <Carousel fade >
                <Carousel.Item >
                    <div className='slide-products'>
                        <div className='card-product'>
                            <Brigadeiro />
                            <LeiteNinho />
                            <OreoComNinho />
                            <Cupuacu />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='slide-products'>
                        <div className='card-product'>
                            <LeiteNinho />
                            <OreoComNinho />
                            <Cupuacu />
                            <Casadinho />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='slide-products'>
                        <div className='card-product'>
                            <OreoComNinho />
                            <Cupuacu />
                            <Casadinho />
                            <Beijinho />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselProducts;