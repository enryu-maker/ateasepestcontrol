import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Images } from '../assets/images';
import { Link } from 'react-scroll';
export default function Header() {
    return (
        <>
            <div className="h-[70px] w-full sticky top-0 z-50  bg-white font-Poppins flex items-center justify-between px-20">
                <div className="text-primary text-2xl flex items-center space-x-2">
                    <img src={Images.logo} alt="logo" className='w-[70px] h-[70px]' />
                    <img src={Images.wordmark} alt="logo" className=" h-auto w-[140px]" />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                        <div className="bg-primary h-[35px] w-[35px] rounded-full flex items-center justify-center">
                            <IoMdCall className="text-white text-xl" />
                        </div>
                        <div className="">
                            <p className=' font-light text-[10px] text-gray-500'>
                                Call Us Now!
                            </p>
                            <a href='tel:0251-847-3226' className=' font-medium text-sm'>
                                0251-847-3226
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
                            <a href='mailto:office.aepc@gmail' className=' font-medium text-sm'>
                                office.aepc@gmail
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
            <div className="h-[55px] w-full sticky top-[70px] z-50 font-Poppins uppercase text-sm bg-gray-100 flex justify-evenly items-center">
                <button
                    className=' bg-transparent uppercase text-transparent px-8 py-2 rounded-full'
                >
                    call now
                </button>
                <div className="flex justify-center space-x-6 items-center">
                    <Link to='home' duration={500} smooth={true} className="text-black font-normal cursor-pointer  group transition duration-300">Home
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='about' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">About Us
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='service' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Services
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='contact' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Contact Us
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                </div>
                <button
                    className='bg-primary uppercase text-white px-8 py-2 rounded-full'
                >
                    Call Now
                </button>

            </div>
        </>
    )
}
