import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function MultiCarousel(props) {
    const { products, component: Component } = props;

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="multi-carousel" style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '70px' }}>
            <div>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="transform 500ms ease-in-out"
                    transitionDuration={500}
                    infinite={true}
                    // centerMode={true}
                >
                    {products.map(product => (
                        <Component key={product.id} {...product} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default MultiCarousel;
