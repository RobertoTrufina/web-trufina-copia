import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Beijinho from '../Cards/CardsHome/Beijinho';

import Brigadeiro from '../Cards/CardsHome/Brigadeiro';
import Cupuacu from '../Cards/CardsHome/Cupuacu';
import LeiteNinho from '../Cards/CardsHome/LeiteNinho';
import OreoComNinho from '../Cards/CardsHome/OreoComNinho';
import Casadinho from '../Cards/CardsHome/Casadinho';

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
                            <Beijinho/>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselProducts;