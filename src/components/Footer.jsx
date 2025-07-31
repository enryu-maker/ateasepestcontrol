import React from 'react'
import { Images } from '../assets/images'
import { Link } from 'react-scroll'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
    return (
        <div className='md:h-[50vh] w-full flex flex-col bg-contain bg-no-repeat justify-evenly space-y-3 font-Poppins items-center'
        >
            <div className="w-[88%] flex h-auto flex-col space-y-2 md:flex-row justify-evenly md:items-start">
                <div className="flex flex-col md:w-[25%]   md:justify-center  space-y-1 items-center">
                    <div className="flex flex-row   justify-center  items-center">
                        <img src={Images.logo} alt="logo" className='w-[70px]  h-[70px]' />
                        <img src={Images.wordmark} alt="logo" className=" h-auto w-[100px] " />
                    </div>
                    <div
                        onClick={() => {
                            window.open('https://www.facebook.com/p/At-Ease-Pest-Control-100092306544751/', '_blank')
                        }}
                        className="bg-white h-[40px] w-[40px] self-center rounded-full flex items-center justify-center">
                        <FaFacebook className="text-blue-500 text-2xl" />
                    </div>
                </div>
                <div className="flex flex-col h-[80%] md:w-[25%]  space-y-1 items-start">
                    <Link className=' font-semibold uppercase text-xl text-start text-black'>
                        Quick Links
                    </Link>
                    <Link to='home' duration={500} smooth={true} className="text-black font-normal cursor-pointer  group transition duration-300">Home
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='about' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">About Us
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='service' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Services
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='location' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Location
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='contact' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Contact Us
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                </div>
                <div className="flex flex-col h-[80%] md:w-[25%]  space-y-1 items-start">
                    <h1 className=' font-semibold text-xl uppercase text-black'>
                        Services
                    </h1>
                    <Link duration={500} smooth={true} className="text-black font-normal cursor-pointer  group transition duration-300">Residential Pest Control
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Commercial Pest Control
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Termite Control & Prevention
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Rodent Control
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Bed Bug Extermination
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Eco-Friendly Pest Solutions
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                </div>
                <div className="flex flex-col h-[80%] md:w-[25%]  space-y-2 items-start">
                    <h1 className=' font-semibold text-xl uppercase text-black'>
                        Contact Info
                    </h1>
                    <div className="flex space-x-2">
                        <div className="bg-primary h-[35px] w-[35px] rounded-full flex items-center justify-center">
                            <IoMdCall className="text-white text-xl" />
                        </div>
                        <div className="">
                            <p className=' font-light text-[10px] text-gray-500'>
                                Call Us Now!
                            </p>
                            <a href='tel:0251-847-3226' className=' font-medium text-sm'>
                                251-847-3226
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="bg-primary h-[35px] w-[35px] rounded-full flex items-center justify-center">
                            <MdEmail className="text-white text-xl" />
                        </div>
                        <div className="">
                            <p className=' font-light text-[10px] text-gray-500'>
                                Email Us Now!
                            </p>
                            <a href='mailto:office@ateasepestcontrol.com' className=' font-medium text-sm'>
                                office@ateasepestcontrol.com
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="bg-primary h-[35px] w-[35px] rounded-full flex items-center justify-center">
                            <FaLocationDot className="text-white text-xl" />
                        </div>
                        <div className="">
                            <p className=' font-light text-[10px] text-gray-500'>
                                Visit Us Now!
                            </p>
                            <a href='mailto:office.aepc@gmail' className=' font-medium text-sm'>
                                4707 Four Points Rd.
                                Deer Park, AL 36529
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[78%] w-[88%] py-4  flex flex-col md:flex-row justify-between items-start md:items-center">
                <p className='  font-normal text-gray-500'>
                    © 2021 At Ease Pest Control. All Rights Reserved.
                </p>
                <p className='font-normal text-gray-500'>
                    Made with ❤️ by <a href='https://www.nerdtech.in' className='text-primary italic cursor-pointer group transition duration-300'>nerdtech LLC.<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary font-medium"></span></a>
                </p>
            </div>
        </div>
    )
}
