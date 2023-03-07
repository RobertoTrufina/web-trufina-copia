import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img1Carrossel from '../../imgs/img1Carrossel.jpg';
import img2Carrossel from '../../imgs/img2Carrossel.png';
import img3Carrossel from '../../imgs/img3Carrossel.jpg';

import './style.css';


function CarouselImg() {
    return (

        <div className='slide-carousel'>
            <Carousel fade>
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1Carrossel}
                            alt="First slide"
                        />
                    <Carousel.Caption style={{fontSize:"30px"}}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2Carrossel}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3Carrossel}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselImg;