import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CustomCarousel.css';

function Customcarousel() {

    const interval = 3000;

    return (
        <div className="d-flex justify-content-center " >
            <Carousel className="custom-carousel" style={{ height: "276px", width: "1440px" ,borderRadius: "10px" ,marginTop:'25px'}}>

                <Carousel.Item interval={interval}>
                    <img
                        className="d-block w-100"
                        src="/images/car1.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <Button varient='primary'>Shop Now</Button>
                    </Carousel.Caption> */}
                </Carousel.Item>


                <Carousel.Item interval={interval}>
                    <img
                        className="d-block w-100"
                        src="/images/car2.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <Button varient='primary'>Shop Now</Button>


                    </Carousel.Caption> */}
                </Carousel.Item>


                <Carousel.Item interval={interval}>
                    <img
                        className="d-block w-100"
                        src="/images/car3.png"
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
