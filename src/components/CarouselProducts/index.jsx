import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Card from '../Card';

import './style.css';


function CarouselProducts() {
    return (

        <div className='grid-container-carousel-products'>
            <Carousel fade >
                <Carousel.Item >
                    <div className='slide-products'>
                        <div className='card-product'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselProducts;