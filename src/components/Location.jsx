import React from 'react';
import { Helmet } from 'react-helmet';
const counties = [
    {
        name: 'Washington County',
        state: 'Alabama',
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
        state: 'Alabama',
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
        state: 'Alabama',
        area: [
            "Gilbertown",
            "Silas",
            "Toxey"
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433074.58180635475!2d-88.5304000390664!3d32.004407724218495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8884e1ab44f9d7b9%3A0x2f39088d7e57ff2f!2sChoctaw%20County%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1735986878815!5m2!1sen!2sin'
    },
    {
        name: 'Clarke County',
        state: 'Alabama',
        area: [
            "Jackson",
            "Grove Hill",
            "Thomasville",
            "Coffeeville"
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870072.3015843914!2d-88.50030253199937!3d31.586727323072058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889acbb92d929c41%3A0xe4f767c8921028cb!2sClarke%20County%2C%20AL%2C%20USA!5e0!3m2!1sen!2sin!4v1736089422187!5m2!1sen!2sin'
    },
    {
        name: 'George County',
        state: 'Mississippi',
        area: [
            "We’ll be unveiling the location soon.",
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219182.32529553477!2d-88.81363627150225!3d30.866406113587303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889b79f573676607%3A0x6bc0fd0425c40c82!2sGeorge%20County%2C%20MS%2C%20USA!5e0!3m2!1sen!2sin!4v1768812266001!5m2!1sen!2sin"
    },
    {
        name: 'Greene County',
        state: 'Mississippi',
        area: [
            "We’ll be unveiling the location soon.",
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436756.66803440836!2d-88.96336397847554!3d31.2162556078366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889b67a560648997%3A0x2a68b6b161316623!2sGreene%20County%2C%20MS%2C%20USA!5e0!3m2!1sen!2sin!4v1768812157755!5m2!1sen!2sin"
    },
    {
        name: 'Wayne County',
        state: 'Mississippi',
        area: [
            "We’ll be unveiling the location soon.",
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434678.76195769536!2d-89.02611513225625!3d31.66319423646895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c9807e390db79%3A0x7636bacd644d3bf7!2sWayne%20County%2C%20MS%2C%20USA!5e0!3m2!1sen!2sin!4v1768812432050!5m2!1sen!2sin"
    },
];

export default function Location() {


    const groupedByState = counties.reduce((acc, county) => {
        if (!acc[county.state]) {
            acc[county.state] = [];
        }
        acc[county.state].push(county);
        return acc;
    }, {});


    return (
        <div
            name="location"
            className="w-full bg-cover bg-no-repeat flex flex-col py-6 md:py-16 justify-center items-center font-Poppins bg-white"
        >
            <Helmet>
                <title>Service Areas | At Ease Pest Control</title>
                <meta name="description" content="At Ease Pest Control offers eco-friendly pest management solutions across New York City, Brooklyn, Queens, and nearby areas. Contact us to find a location near you!" />
                <meta name="keywords" content="Pest Control NYC, Pest Control Brooklyn, Pest Control Queens, Local Pest Services, Affordable Pest Control" />
                <meta name="author" content="At Ease Pest Control" />
            </Helmet>
            <div className="text-center mb-8">
                <p className="font-regular text-[14px] uppercase text-primary">
                    Location
                </p>
                <p className="font-semibold text-xl md:text-4xl text-black">
                    Locations We Service
                </p>
            </div>
            <div className="flex flex-col h-auto lg:grid-cols-4 gap-8 px-4 md:px-16 w-full">
                {Object.entries(groupedByState).map(([state, stateCounties]) => (
                    <div key={state} className="w-full">

                        {/* State Title */}
                        <h2 className="text-2xl font-semibold text-black mb-6 mt-10">
                            {state}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stateCounties.map((county, index) => (
                                <div key={index} className="flex flex-col transition duration-300">

                                    <div className="relative h-60">
                                        <iframe
                                            src={county.mapUrl}
                                            style={{ border: 0 }}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="w-full h-full"
                                        />
                                    </div>

                                    <div className="text-center mt-2">
                                        <p className="font-medium text-black">
                                            {county.name}
                                        </p>
                                    </div>

                                    <div className="p-4 mt-4 rounded-lg">
                                        <h3 className="text-center text-lg font-semibold text-primary">
                                            Areas Served:
                                        </h3>
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
                ))}

            </div>
        </div>
    );
}
