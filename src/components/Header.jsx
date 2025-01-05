import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdOutlineMenuOpen } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Images } from '../assets/images';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';

export default function Header() {
    const [open, setOpen] = React.useState(false)
    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20,
            },
        },
        closed: {
            x: '100%',
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20,
            },
        },
    };
    return (
        <>
            <div className="h-[70px] hidden w-full fixed top-0 z-50  bg-white font-Poppins md:flex items-center justify-between px-20">
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
                            <a href='tel:251-847-3226' className=' font-medium text-sm'>
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
            <div className="h-[55px] w-full hidden sticky top-[70px] z-40 font-Poppins uppercase text-sm bg-gray-50 md:flex justify-evenly items-center">
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
                    <Link to='location' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Location
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link to='contact' duration={500} smooth={true} className="text-black font-normal cursor-pointer group transition duration-300">Contact Us
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                </div>
                <a href='tel:251-847-3226' className=' bg-primary uppercase text-white px-8 py-2 rounded-full'>
                    Call Now
                </a>
            </div>
            <div className="h-[70px] md:hidden bg-white px-4 w-screen fixed top-0 z-50   font-Poppins flex items-center justify-between ">
                <div className="text-primary text-2xl flex items-center space-x-2">
                    <img src={Images.logo} alt="logo" className='w-[70px] h-[70px]' />
                </div>
                <button onClick={() => setOpen(!open)} className="text-primary text-2xl">
                    <HiMenuAlt3 className=' text-3xl' />
                </button>
            </div>
            <motion.div
                initial="closed"
                animate={open ? 'open' : 'closed'}
                variants={menuVariants}
                className={`fixed inset-0 h-screen font-Poppins bg-white backdrop-blur-lg flex flex-col items-center space-y-10 lg:hidden z-50`}
            >
                {/* Top Bar with Logo and Close Icon */}
                <div className="flex w-full justify-between px-4 items-center">
                    <img src={Images.logo} alt="logo" className='w-[70px] h-[70px]' />
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-primary text-3xl"
                    >
                        <HiOutlineX />
                    </button>
                </div>

                <div className=" w-[88%] flex flex-col items-start space-y-2  lg:mt-0">
                    <Link
                        to='home'
                        onClick={() => setOpen(!open)}
                        duration={500}
                        smooth={true}
                        className="text-black text-xl font-normal cursor-pointer  group transition duration-300">Home
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link
                        onClick={() => setOpen(!open)}
                        to='about'
                        duration={500}
                        smooth={true}
                        className="text-black text-xl  font-normal cursor-pointer group transition duration-300">About Us
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link
                        onClick={() => setOpen(!open)}
                        to='service'
                        duration={500}
                        smooth={true}
                        className="text-black text-xl  font-normal cursor-pointer group transition duration-300">Services
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link
                        onClick={() => setOpen(!open)}
                        to='location'
                        duration={500}
                        smooth={true}
                        className="text-black text-xl  font-normal cursor-pointer group transition duration-300">Location
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                    <Link
                        onClick={() => setOpen(!open)}
                        to='contact'
                        duration={500}
                        smooth={true}
                        className="text-black text-xl  font-normal cursor-pointer group transition duration-300">Contact Us
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
                    </Link>
                </div>
                <div className=" w-[88%] flex flex-col items-start space-y-3  lg:mt-0">
                    <div className="flex space-x-2">
                        <div className="bg-primary h-[35px] w-[35px] rounded-full flex items-center justify-center">
                            <IoMdCall className="text-white text-xl" />
                        </div>
                        <div className="">
                            <p className=' font-light text-[10px] text-gray-500'>
                                Call Us Now!
                            </p>
                            <a href='tel:251-847-3226' className=' font-medium text-sm'>
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

                <h1 className={` 'text-white'} fixed bottom-24 text-xl text-center flex items-center font-body`}>
                    <img src={Images.logo} alt="logo" className='w-[70px] h-[70px]' />
                    At Ease Pest Control
                </h1>
            </motion.div>

            {/* Overlay to close menu when clicking outside */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-white opacity-50 z-30 lg:hidden"
                ></div>
            )}


        </>
    )
}
