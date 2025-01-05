import React from 'react';
import { Images } from '../assets/images';

// Data array for counties
const counties = [
    {
        name: 'Washington County',
        area: [
            "Chatom",
            "Tibbie",
            "Millry",
            "Fruitdale",
            "Deer Park",
            "McIntosh",
            "Wagarville",
            "Leroy",
            "Saint Stephens",
            "Vinegar Bend",
            "Sunflower",
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435873.80970330175!2d-88.50551030344856!3d31.406847865396596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889b281ab826cdbf%3A0xf6bff93522821e05!2sWashington%20County%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1735986756519!5m2!1sen!2sin'
    },
    {
        name: 'Mobile County',
        area: [
            "Mobile",
            "Citronelle",
            "Saraland",
            "Semmes",
            "Creola",
            "Axis",
            "LeMoyne",
            "Bucks",
            "Chastang",
            "Mt Vernon",
            "Calvert",
            "Chunchula",
            "Georgetown",
            "Wilmer",
            "Mauvilla",
            "Eight Mile",
            "Chickasaw",
            "Prichard",
            "Tillmans Corner",
            "Theodore"
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878626.0534297093!2d-88.83744803502469!3d30.65838251715757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889bb2615243a12b%3A0x4691295225e0453b!2sMobile%20County%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1735986800510!5m2!1sen!2sin'
    },
    {
        name: 'Choctaw County',
        area: [
            "Gilbertown",
            "Silas",
            "Toxey"
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433074.58180635475!2d-88.5304000390664!3d32.004407724218495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8884e1ab44f9d7b9%3A0x2f39088d7e57ff2f!2sChoctaw%20County%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1735986878815!5m2!1sen!2sin'
    },
    {
        name: 'Clarke County',
        area: [
            "Jackson",
            "Grove Hill",
            "Thomasville",
            "Coffeeville"
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870072.3015843914!2d-88.50030253199937!3d31.586727323072058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889acbb92d929c41%3A0xe4f767c8921028cb!2sClarke%20County%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1736089422187!5m2!1sen!2sin'
    },
    // Add more counties here with their corresponding map URLs
];

export default function Location() {
    return (
        <div
            name="location"
            className="w-full bg-cover bg-no-repeat flex flex-col py-6 md:py-16 justify-center items-center font-Poppins bg-white"
        >
            <div className="text-center mb-8">
                <p className="font-regular text-[14px] uppercase text-primary">
                    Location
                </p>
                <p className="font-semibold text-xl md:text-4xl text-black">
                    Locations We Service
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto lg:grid-cols-4 gap-8 px-4 md:px-16 w-full">
                {counties.map((county, index) => (
                    <div
                        key={index}
                        className="flex flex-col  transition duration-300"
                    >
                        <div className="relative h-60">
                            <iframe
                                src={county.mapUrl}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>

                        <p className="text-center mt-2 font-medium text-black">
                            {county.name}
                        </p>

                        {/* Area Section */}
                        <div className="p-4 mt-4 rounded-lg">
                            <h3 className="text-center text-lg font-semibold text-primary">Areas Served:</h3>
                            <ul className="flex flex-wrap gap-2 justify-center mt-2">
                                {county.area.map((area, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm text-black bg-gray-100 hover:bg-primary cursor-pointer hover:text-white px-2 py-1 rounded-md shadow-sm"
                                    >
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
