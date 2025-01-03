import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Images } from '../assets/images';
export default function Hero() {
    const customArrowRight = (onClickHandler, hasNext) => (
        hasNext && (
            <button
                onClick={onClickHandler}
                className="absolute bottom-1 right-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
                style={{ zIndex: 10 }}
            >
                &#8594; {/* You can replace this with an icon */}
            </button>
        )
    );
    const customArrowLeft = (onClickHandler, hasPrev) => (
        hasPrev && (
            <button
                onClick={onClickHandler}
                className="absolute bottom-1 left-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
                style={{ zIndex: 10 }}
            >
                &#8592; {/* You can replace this with an icon */}
            </button>
        )
    );
    return (
        <div
            name="home"
            className="">
            <Carousel
                showArrows
                infiniteLoop
                autoPlay
                interval={5000}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                renderArrowNext={(onClickHandler, hasNext) =>
                    customArrowRight(onClickHandler, hasNext)
                }
                renderArrowPrev={(onClickHandler, hasNext) =>
                    customArrowLeft(onClickHandler, hasNext)
                }
            >
                <img src={Images.C1} className='w-screen h-[80vh] object-cover' alt="carousel" />

            </Carousel>
        </div>
    )
}
