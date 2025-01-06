import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Images } from '../assets/images';
import { Helmet } from 'react-helmet';
export default function Hero() {
    const customArrowRight = (onClickHandler, hasNext) => (
        hasNext && (
            <button
                onClick={onClickHandler}
                className="absolute hidden md:flex justify-center items-center top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
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
                className="absolute hidden md:flex justify-center items-center top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
                style={{ zIndex: 10 }}
            >
                &#8592; {/* You can replace this with an icon */}
            </button>
        )
    );
    return (
        <div
            name="home"
            className=" mt-[70px]">
            <Helmet>
                <title>At Ease Pest Control | Professional Pest Management</title>
                <meta name="description" content="Protect your home or business with At Ease Pest Control. We offer effective, eco-friendly pest solutions to keep your spaces safe and pest-free." />
                <meta name="keywords" content="Pest Control, Eco-Friendly Pest Solutions, Professional Pest Management" />
                <meta name="author" content="At Ease Pest Control" />
            </Helmet>
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
                <img src={Images.C1} className='w-screen md:h-[90vh] object-cover' alt="carousel" />
                <img src={Images.C2} className='w-screen md:h-[90vh] object-cover' alt="carousel" />
                <img src={Images.C3} className='w-screen md:h-[90vh] object-cover' alt="carousel" />
                <img src={Images.C4} className='w-screen md:h-[90vh] object-cover' alt="carousel" />
            </Carousel>
        </div>
    )
}
