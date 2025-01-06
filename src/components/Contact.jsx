import React from "react";
import { Images } from "../assets/images";
import axios from "axios";
import { Helmet } from 'react-helmet';
export default function Contact() {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
    });
    const sentMessage = async (data) => {
        console.log(data)
        try {
            const response = await axios.post(
                "https://formspree.io/f/xqaagdpg",
                { ...data } // Spread operator creates a new, clean object
            );
            alert("Message Sent Successfully");
            setData({
                name: "",
                email: "",
                number: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            alert("Message Not Sent");
        }
    };
    return (
        <div
            name="contact"
            className="w-full min-h-screen bg-cover bg-center py-10 px-4 md:px-20 flex flex-col md:flex-row justify-around items-center font-Poppins bg-white"
            style={{
                backgroundImage: `url(${Images.contact})`,
            }}
        >
            <Helmet>
                <title>Contact Us | At Ease Pest Control</title>
                <meta name="description" content="Get in touch with At Ease Pest Control for expert pest management solutions. Contact us today to discuss your needs or schedule a service!" />
                <meta name="keywords" content="Contact Pest Control, At Ease Pest Control Contact, Schedule Pest Service, Pest Management Help" />
                <meta name="author" content="At Ease Pest Control" />
            </Helmet>
            {/* Left Section - Text and Form */}
            <div className="w-full md:w-1/2 text-start text-white space-y-6">
                <p className="font-semibold capitalize text-2xl md:text-4xl text-center md:text-start">
                    Get your free quote!
                </p>
                <p className="text-[12px] md:text-[14px] uppercase font-regular text-white">
                    Complete the form below and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-6 mt-4">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            placeholder="Full name"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder="Email"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                    </div>
                    {/* Phone and Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            value={data.number}
                            onChange={(e) => setData({ ...data, number: e.target.value })}
                            placeholder="Phone"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                        <input
                            type="text"
                            value={data.subject}
                            onChange={(e) => setData({ ...data, subject: e.target.value })}
                            placeholder="Subject"
                            className="border border-gray-300 bg-white/80 rounded-lg p-3 text-black focus:outline-none"
                        />
                    </div>
                    {/* Message */}
                    <textarea
                        rows="5"
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        placeholder="Your message goes here..."
                        className="border w-full bg-white/80 border-gray-300 rounded-lg p-3 text-black focus:outline-none"
                    ></textarea>
                    {/* Submit Button */}
                    <button
                        onClick={() => sentMessage(data)}
                        className="bg-white text-primary py-2 px-6 rounded-lg  transition duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/3 hidden md:flex justify-center items-center">

            </div>
        </div>
    );
}
