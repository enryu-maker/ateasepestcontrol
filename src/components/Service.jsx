import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AiFillSchedule } from 'react-icons/ai';
import { MdHomeWork, MdFactory, MdPestControl, MdPestControlRodent } from "react-icons/md";
import { FaBugSlash } from "react-icons/fa6";
import { Images } from '../assets/images';
export default function Service() {
    const Card = ({ title, icon, image }) => (
        <div className="md:w-[270px] w-[300px] h-[200px] md:h-[300px] space-y-3 bg-white flex flex-col justify-center items-center rounded-md shadow-xl hover:bg-primary text-black duration-300 bg-cover transition-all hover:text-white group"
            style={{
                backgroundImage: `url(${image}`
            }}
        >
            <div className="flex flex-col justify-center space-y-2 items-center h-full w-full bg-black/30 text-white font-semibold text-lg">
                <div className="bg-primary h-[55px] w-[55px] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    {icon}
                </div>
                <p className="font-regular text-base text-center group-hover:text-white transition-all duration-300">
                    {title}
                </p>
            </div>
        </div>
    );
    const customArrowRight = (onClickHandler, hasNext) => (
        hasNext && (
            <button
                onClick={onClickHandler}
                className="absolute -bottom-2 md:bottom-1 right-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
                style={{ zIndex: 10 }}
            >
                &#8594;
            </button>
        )
    );
    const customArrowLeft = (onClickHandler, hasPrev) => (
        hasPrev && (
            <button
                onClick={onClickHandler}
                className="absolute -bottom-2 md:bottom-1  left-4 transform -translate-y-1/2 bg-primary text-white h-[40px] w-[40px] rounded-full shadow-md hover:bg-opacity-80"
                style={{ zIndex: 10 }}
            >
                &#8592;
            </button>
        )
    );
    return (
        <>
            <div name="service" className="w-full h-auto md:h-screen space-y-1 py-5 flex flex-col  justify-center items-center font-Poppins bg-white">
                <p className=' font-regular text-[14px] uppercase text-primary text-center md:text-start'>
                    Our Services
                </p>
                <p className=' font-semibold text-xl md:text-4xl text-black text-center'>
                    Explore Our Services
                </p>
                <p className='font-regular text-[12px] self-center  w-[88%] md:w-[68%] text-black text-justify md:text-center'>
                    AtEase Pest Control provides reliable and eco-friendly pest control solutions for homes and businesses. Our expert team efficiently handles pest infestations, from ants to rodents, using safe and effective methods. We ensure your space remains pest-free and comfortable, with a focus on customer satisfaction and long-term prevention.
                </p>
                <div className=" w-full lg:w-[88%] mt-24 bg-transparent flex justify-center items-center  lg:mt-0">
                    <Carousel
                        // autoPlay
                        // infiniteLoop
                        showThumbs={false}
                        showIndicators={false}
                        showArrows={true}
                        swipeable={false}
                        interval={5000}
                        emulateTouch
                        className=' bg-transparent w-[88%] mx-auto h-auto '
                        renderArrowNext={(onClickHandler, hasNext) =>
                            customArrowRight(onClickHandler, hasNext)
                        }
                        renderArrowPrev={(onClickHandler, hasNext) =>
                            customArrowLeft(onClickHandler, hasNext)
                        }

                    >
                        {/* Slide 1 */}
                        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-center items-center w-full h-full md:space-x-4 p-14">
                            <Card title="Residential Pest Control" icon={<MdHomeWork className="text-white text-3xl group-hover:text-primary transition-all duration-300" />} image={Images.residential} />
                            <Card title="Commercial Pest Control" icon={<MdFactory className="text-white text-3xl group-hover:text-primary transition-all duration-300" />} image={Images.commercial} />
                            <Card title="Termite Control & Prevention" icon={<MdPestControl className="text-white text-3xl group-hover:text-primary transition-all duration-300" />} image={Images.termite} />
                        </div>

                        {/* Slide 2 */}
                        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-center items-center w-full h-full md:space-x-4 p-14">
                            <Card title="Rodent Control" icon={<MdPestControlRodent className="text-white text-3xl group-hover:text-primary transition-all duration-300" />} image={Images.rodent} />
                            <Card title="Bed Bug Extermination" icon={<MdPestControl className="text-white text-3xl group-hover:text-primary transition-all duration-300" />} image={Images.bed} />
                            <Card title="Eco-Friendly Pest Solutions" icon={<FaBugSlash className="text-white text-3xl group-hover:text-primary transition-all duration-300" />} image={Images.eco} />
                        </div>
                    </Carousel>

                </div>
                <p className='font-regular text-[12px] w-[88%] md:w-[68%] self-center text-black text-center'>
                    Don't hesitate contact us for help and service. <button className=' text-primary cursor-pointer group transition duration-300'>
                        contact now
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </button>
                </p>
            </div>
        </>
    )
}
