import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import "../Styles/style.css";
import { Details, FaceBook, Gmailto, HandleMeet, Instagram, Linkedin, Mailto, Twitter } from "../Services/Calls";

const Contact:React.FC=()=>{

    const [formdata,setformdata]=useState<Details>({
        name:"",
        email:"",
        subject:"",
        message:"",
    });

    const HandleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
    const {name,value}=e.target;
    setformdata((prev)=>({
        ...prev,
        [name]:value,
    }))

    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("https://formsubmit.co/ajax/debeshjha1@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(formdata),
        })
        .then((res) => {
            if (res.ok) {
                alert("✅ Thank you for reaching out to us. We'll get back to you shortly!");
                    setformdata({
                    name: "",
                    email: "",
                    subject:"",
                    message: ""
            });
            } else {
                throw new Error("FormSubmit response was not OK.");
            }
        })
        .catch((err) => {
            console.error("Form submission error:", err);
            alert("❌ Something went wrong. Please check your email and try again.");
        });
};


    return(
        <section className="p-5 pt-[100px] w-full max-w-screen overflow-x-hidden">
            <h1 className="text-center font-bold text-4xl cursor-pointer">Let's Get In Touch</h1>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="order-2 lg:order-1 h-full lg:w-1/2 p-2 sm:pl-3 mt-5 flex flex-col">
                    <h1 className="font-bold sm:2xl text-4xl text-black cursor-pointer hover:text-blue-600">Contact Me</h1>
                    <div className="flex flex-col mt-5 ml-5 gap-y-8">
                        <div className="flex flex-row items-center  hover:underline hover:underline-offset-6 cursor-pointer">
                            <IoMailOutline className="text-3xl mr-2"/>
                            <h1 className="text-2xl hover-white-shadow">debeshjha1@gmail.com</h1>
                        </div>

                        <div className="flex flex-row items-center hover:underline hover:underline-offset-6 cursor-pointer">
                            <MdPhone className="text-3xl mr-2"/>
                            <h1 className="text-2xl hover-white-shadow">+1 (312) 530-5020</h1>
                        </div>

                        <div className="flex flex-row items-center cursor-pointer">
                            <FaLocationDot className="text-3xl mr-2"/>
                            <h1 className="sm:text-md text-2xl hover-white-shadow break-words w-full">
                                Department of Computer Science, <br />
                                414 E. Clark Street, <br />
                                Vermillion, SD 57069
                            </h1>
                        </div>

                        <div className="flex flex-row items-center justify-center cursor-pointer text-black hover:font-bold duration-300 transition-all hover:text-white">
                            <button className="bg-button w-full h-auto p-3 rounded-2xl cursor-pointer" onClick={HandleMeet}>
                                <div className="flex items-center justify-center gap-5">
                                    <h1>Let's Meet</h1>
                                    <SiGooglemeet/>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className="flex flex-row gap-11 items-center text-4xl ml-4 mt-8 justify-between">
                        <BiLogoGmail className="rounded-full border-2 p-2 hover:bg-blue-400 hover:text-black cursor-pointer hover:scale-120 hover:border-blue-400 duration-300" onClick={Gmailto}/>
                        <PiMicrosoftOutlookLogo className="rounded-full border-2 p-2 hover:bg-blue-400 hover:text-black cursor-pointer hover:scale-120 hover:border-blue-400 duration-300" onClick={Mailto}/>
                        <TiSocialLinkedin className="rounded-full border-2 p-2 hover:bg-blue-400 hover:text-black cursor-pointer hover:scale-120 hover:border-blue-400 duration-300" onClick={Linkedin}/>
                        <RiTwitterXLine className="rounded-full border-2 p-2 hover:bg-blue-400 hover:text-black cursor-pointer hover:scale-120 hover:border-blue-400 duration-300" onClick={Twitter}/>
                        <FaFacebookF className="hidden lg:block rounded-full border-2 p-2 hover:bg-blue-400 hover:text-black cursor-pointer hover:scale-120 hover:border-blue-400 duration-300" onClick={FaceBook}/>
                        <FaInstagram className="hidden lg:block rounded-full border-2 p-2 hover:bg-blue-400 hover:text-black cursor-pointer hover:scale-120 hover:border-blue-400 duration-300" onClick={Instagram}/>
                    </div>

                </div>
                {/**Second Big Box */}
                <div className="order-1 lg:order-2 h-full w-full p-10">
                    <div className="flex flex-col">
                        <form className="space-y-5" onSubmit={HandleSubmit}>
                            <div className="space-y-4">
                                <label className="text-2xl">Name
                                    <div className="flex flex-row items-center mt-1">
                                        <input name="name" type="text" value={formdata.name} onChange={HandleChange} required
                                        className="p-1.5 border-2 w-full rounded-lg focus:shadow-blue-400 focus:shadow-md"/>
                                    </div>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <label className="text-2xl">E-Mail
                                    <div className="flex flex-row items-center mt-1">
                                        <input name="email" type="email" value={formdata.email} onChange={HandleChange} required
                                        className="p-1.5 border-2 w-full rounded-lg focus:shadow-blue-400 focus:shadow-md focus:bg-transparent"/>
                                    </div>
                                </label>
                            </div>

                            {/** Drop Box */}
                            <div className="space-y-4">
                                <label className="text-2xl">Purpose of Inquiry
                                <div className="flex flex-row items-center mt-1">
                                <select
                                name="subject" value={formdata.subject} onChange={HandleChange} required
                                className="p-1.5 border-2 w-full rounded-lg focus:shadow-blue-400 focus:shadow-md focus:bg-transparent">
                                    <option value="General Inquiry" className="bg-gray-200">General Inquiry</option>
                                    <option value="Professional Talk" className="bg-gray-200">Professional Talk</option>
                                    <option value="collaboration" className="bg-gray-200">Collaboration</option>
                                    <option value="Support" className="bg-gray-200">Support</option>
                                    <option value="Others" className="bg-gray-200">Others</option>
                                </select>
                                </div>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <label className="text-2xl">Message
                                    <div className="flex flex-row items-center mt-1">
                                        <textarea name="message" value={formdata.message} onChange={HandleChange} required
                                        className="p-1.5 border-2 w-full h-30 rounded-lg focus:shadow-blue-400 focus:shadow-md"/>
                                    </div>
                                </label>
                            </div>
                            <button type="submit" className="bg-button text-xl text-black w-full font-semibold rounded-2xl p-3 cursor-pointer hover:shadow-sm hover:scale-97 hover:shadow-blue-400 hover:text-white duration-300 transition">Send</button>
                        </form>
                    </div> 
                </div>
            </div>
        </section>
    );
}

export default Contact;