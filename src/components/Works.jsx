import React from "react";
import { Images } from "../assets/images";

export default function Works() {
    return (
        <div
            className="w-full h-[50vh] md:h-screen bg-cover bg-no-repeat flex flex-col justify-between py-6 md:py-16 items-center font-Poppins bg-white"
            style={{
                backgroundImage: `url(${Images.work})`,
            }}
        >
            {/* Section for content */}
            <div className="flex flex-col items-center text-center px-4 space-y-3 md:space-y-4">
                <p className="text-[10px] sm:text-[12px] md:text-[14px] uppercase font-regular text-primary">
                    How it Works
                </p>
                <p className="text-base sm:text-lg md:text-2xl lg:text-4xl font-semibold text-black">
                    Simply book online and pay on the day
                </p>
            </div>

            {/* CTA Section */}
            <div className="h-auto w-[90%] sm:w-[80%] md:w-[70%] flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 px-6 py-4 bg-primary rounded-lg shadow-lg">
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-white text-center md:text-left">
                    Get started with AtEase Pest Control today
                </p>
                <button
                    className="bg-white text-primary uppercase px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
}
