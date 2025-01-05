import React from 'react'
import { PiCertificateFill } from "react-icons/pi";
import { AiFillSchedule } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { MdPestControl } from "react-icons/md";
import { Images } from '../assets/images';
import { Link } from 'react-scroll';
export default function About() {
    return (
        <div name="about" className="w-full h-auto md:h-screen flex flex-col justify-center items-center space-y-1 py-5 font-Poppins bg-gray-50"
            style={{
                backgroundImage: `url(${Images.about})`, // Fixed URL formatting
            }}
        >
            <div className="flex flex-col md:flex-row items-center  space-x-2 relative w-full h-auto md:h-[50vh] justify-center ">
                <div className="h-full w-full hidden   md:w-[50%] px-10 md:flex justify-center items-center">
                    {/* 3 box differnt size overlatping each other */}
                    <img alt='image1' src={Images[1]} className=" object-cover  rounded-sm  z-40 h-[300px] w-[280px]" />
                    <img alt='image2' src={Images[3]} className="object-cover  rounded-sm absolute left-20 top-0 h-[200px] w-[180px]" />
                    <img alt='image3' src={Images[2]} className=" object-cover rounded-sm z-40 absolute left-32 bottom-0 h-[100px] w-[200px]" />
                    <div className="bg-white h-[100px] w-[100px] z-40 bottom-2 shadow-2xl left-[31%] absolute rounded-full flex items-center justify-center">
                        <div className="bg-primary h-[60px] w-[60px] shadow-lg z-40 rounded-full flex items-center justify-center">
                            <MdPestControl className="text-white text-3xl" />
                        </div>
                    </div>
                </div>
                <div className="h-full  w-screen md:w-[50%] flex flex-col space-y-1 justify-center md:items-start">
                    <p className=' font-regular text-[14px] uppercase text-primary text-center md:text-start'>
                        Our Introduction
                    </p>
                    <p className=' font-semibold text-xl md:text-4xl text-black  text-center md:text-start'>
                        Welcome to <br /> At Ease Pest Control
                    </p>
                    <p className='font-regular text-[12px] self-center  md:self-start w-[88%] md:w-[68%] text-black text-justify'>
                        we are your trusted partner in providing effective, eco-friendly pest management solutions. We specialize in eliminating pests safely and efficiently, ensuring your home or business remains pest-free. Our team of qualified experts is dedicated to delivering fast, reliable, and affordable services tailored to meet your unique needs. Whether it's preventative treatments or immediate pest control solutions, we're here to help you maintain a comfortable and safe environment. Trust At Ease Pest Control—where peace of mind comes naturally.
                    </p>
                    <Link
                        to='contact'
                        duration={500}
                        smooth={true}
                        className='bg-primary uppercase w-[150px] cursor-pointer md:w-auto md:self-start self-center text-white md:px-8 py-2 rounded-full'
                    >
                        Know More
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:mt-0  space-x-2 relative md:h-[50vh] justify-center ">
                <p className=' font-regular text-[14px] uppercase text-primary text-start md:text-center'>
                    Why you should choose us?
                </p>
                <p className=' font-semibold text-xl md:text-4xl text-black text-center'>
                    Reason To Choose Us
                </p>
                <div className="w-full flex md:flex-row flex-wrap justify-evenly md:justify-center md:space-x-4 pt-4 md:pt-8">
                    {/* Qualified Experts */}
                    <div className="w-[170px] my-2 md:my-0  h-[200px] space-y-3 bg-white flex flex-col justify-center items-center rounded-md shadow-xl hover:bg-primary text-black duration-300 transition-all hover:text-white group">
                        <div className="bg-primary h-[55px] w-[55px] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <PiCertificateFill className="text-white text-3xl group-hover:text-primary transition-all duration-300" />
                        </div>
                        <p className="font-regular text-base text-center group-hover:text-white transition-all duration-300">
                            Qualified <br /> Experts
                        </p>
                    </div>

                    {/* Service On Schedule */}
                    <div className="w-[170px] my-2 md:my-0  h-[200px] space-y-3 bg-white flex flex-col justify-center items-center rounded-md shadow-xl hover:bg-primary text-black duration-300 transition-all hover:text-white group">
                        <div className="bg-primary h-[55px] w-[55px] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <AiFillSchedule className="text-white text-3xl group-hover:text-primary transition-all duration-300" />
                        </div>
                        <p className="font-regular text-base text-center group-hover:text-white transition-all duration-300">
                            Service On <br /> a Schedule
                        </p>
                    </div>

                    {/* Affordable Prices */}
                    <div className="w-[170px] my-2 md:my-0 h-[200px] space-y-3 bg-white flex flex-col justify-center items-center rounded-md shadow-xl hover:bg-primary text-black duration-300 transition-all hover:text-white group">
                        <div className="bg-primary h-[55px] w-[55px] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <FaMoneyCheckAlt className="text-white text-3xl group-hover:text-primary transition-all duration-300" />
                        </div>
                        <p className="font-regular text-base text-center group-hover:text-white transition-all duration-300">
                            Affordable <br /> Prices
                        </p>
                    </div>

                    {/* Reliable Service */}
                    <div className="w-[170px] my-2 md:my-0 h-[200px] space-y-3 bg-white flex flex-col justify-center items-center rounded-md shadow-xl hover:bg-primary text-black duration-300 transition-all hover:text-white group">
                        <div className="bg-primary h-[55px] w-[55px] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <RiServiceLine className="text-white text-3xl group-hover:text-primary transition-all duration-300" />
                        </div>
                        <p className="font-regular text-base text-center group-hover:text-white transition-all duration-300">
                            Reliable <br /> Service
                        </p>
                    </div>

                    {/* Special Offers */}
                    <div className="w-[170px] my-2 md:my-0 h-[200px] space-y-3 bg-white flex flex-col justify-center items-center rounded-md shadow-xl hover:bg-primary text-black duration-300 transition-all hover:text-white group">
                        <div className="bg-primary h-[55px] w-[55px] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <BiSolidOffer className="text-white text-3xl group-hover:text-primary transition-all duration-300" />
                        </div>
                        <p className="font-regular text-base text-center group-hover:text-white transition-all duration-300">
                            Special <br /> Offers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
