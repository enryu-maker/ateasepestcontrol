import React from 'react';
import { Images } from '../assets/images';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "Antoinette Williams",
            daysAgo: "a month ago",
            comment:
                "I was so impressed with how quickly AT EASE was able to schedule a visit to my property! And it was very helpful that they reviewed the inspection report with me! I'll definitely use them again!.",
            initial: "AW",
            rating: "★★★★★"
        },
        {
            id: 2,
            name: "Rick Maglione",
            daysAgo: "a month ago",
            comment:
                "Thought I may have had a termite problem. At Ease understood the seriousness of the situation and responded quickly.  I knew they were a trustworthy business when I was advised it was only ants, and not those home-destroying termites.  They treated the problem and put my mind At Ease.  5 Stars.",
            initial: "RM",
            rating: "★★★★★"
        },
        {
            id: 3,
            name: "Calvin Coaker",
            daysAgo: "21 days ago",
            comment:
                "At Ease pest control did a amazing job handling our insect problems in a very timely professional manner. They made the experience very easy and we highly recommend them as they did a great job.",
            initial: "CC",
            rating: "★★★★★"
        },
        {
            id: 5,
            name: "Larry Hubbard",
            daysAgo: "1 month ago",
            comment: "Very pleased with service and ease of payment. Electronically notified of service date in advance. Highly recommend this company",
            initial: "LH",
            rating: "★★★★★"
        },
        {
            id: 6,
            name: "Alicia Henson",
            daysAgo: "2 months ago",
            comment: "Great customer service! Great response time! Made sure the problem was taken care of instead of a one and done",
            initial: "AH",
            rating: "★★★★★"
        },
        {
            id: 7,
            name: "Frank Dickey",
            daysAgo: "2 months ago",
            comment:
                "At Ease Pest Control is great!!! Good people to do business with . And they do a great job eliminating pests!!!!",
            initial: "FD",
            rating: "★★★★★"
        },
        {
            id: 8,
            name: "Luke Gunter",
            daysAgo: "3 months ago",
            comment:
                "Great service and even better people! Good people to do business with . And they do a great job",
            initial: "LG",
            rating: "★★★★★"
        },
    ];

    const customArrowRight = (onClickHandler, hasNext) => (
        hasNext && (
            <button
                onClick={onClickHandler}
                className="absolute hidden md:flex justify-center items-center top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
                style={{ zIndex: 10 }}
                aria-label="Next review"
            >
                &#8594;
            </button>
        )
    );

    const customArrowLeft = (onClickHandler, hasPrev) => (
        hasPrev && (
            <button
                onClick={onClickHandler}
                className="absolute hidden md:flex justify-center items-center top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
                style={{ zIndex: 10 }}
                aria-label="Previous review"
            >
                &#8592;
            </button>
        )
    );

    return (
        <div
            className="w-screen h-[50vh] bg-gray-100 bg-cover font-Poppins bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${Images.reviews})`, // Fixed URL formatting
            }}
        >
            <div className="flex justify-center items-center h-full w-full bg-black/50 text-white font-semibold text-lg">
                <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
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
                        renderArrowPrev={(onClickHandler, hasPrev) =>
                            customArrowLeft(onClickHandler, hasPrev)
                        }
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-transparent p-6 w-full rounded-lg flex flex-col justify-center items-center space-y-4"
                            >
                                {/* Initials */}
                                <div className="bg-primary h-[60px] w-[60px] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {review.initial}
                                </div>

                                {/* Rating */}
                                <p className="mt-4 font-bold text-yellow-500 text-lg sm:text-xl">{review.rating}</p>

                                {/* Days ago */}
                                <p className="text-sm text-white">{review.daysAgo}</p>

                                {/* Comment */}
                                <p className="mt-4 text-white w-[92%] md:w-full text-xs md:text-base font-light text-center">{review.comment}</p>

                                {/* Reviewer Name */}
                                <h3 className="text-2xl font-semibold capitalize mb-2 text-center">{review.name}</h3>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
