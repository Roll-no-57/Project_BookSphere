import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './CustomCarousel.css';

function Customcarousel() {
    return (
        <div className="d-flex justify-content-center mt-3" >
            <Carousel className="custom-carousel" style={{ height: "500px", width: "1350px" ,borderRadius: "10px"}}>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/images/carousel.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <Button varient='primary'>Shop Now</Button>
                    </Carousel.Caption> */}
                </Carousel.Item>


                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/images/carousel.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <Button varient='primary'>Shop Now</Button>


                    </Carousel.Caption> */}
                </Carousel.Item>


                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/images/carousel2.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <Button varient='primary'>Shop Now</Button>


                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Customcarousel;
