import React from "react";
import { Images } from "../assets/images";

export default function Contact() {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center py-10 px-4 md:px-20 flex flex-col md:flex-row justify-around items-center font-Poppins bg-white"
            style={{
                backgroundImage: `url(${Images.contact})`,
            }}
        >
            {/* Left Section - Text and Form */}
            <div className="w-full md:w-1/2 text-start text-white space-y-6">
                <p className="font-semibold capitalize text-2xl md:text-4xl text-center md:text-start">
                    Get your free quote!
                </p>
                <p className="text-[12px] md:text-[14px] uppercase font-regular text-white">
                    Complete the form below and we'll get back to you as soon as possible.
                </p>
                <form className="space-y-6 mt-4">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full name"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                    </div>
                    {/* Phone and Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                    </div>
                    {/* Message */}
                    <textarea
                        rows="5"
                        placeholder="Your message goes here..."
                        className="border w-full bg-white/80 border-gray-300 rounded-lg p-3 text-black focus:outline-none"
                    ></textarea>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-white text-primary py-2 px-6 rounded-lg  transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Right Section - Placeholder for additional content */}
            <div className="w-full md:w-1/3 hidden md:flex justify-center items-center">

            </div>
        </div>
    );
}
