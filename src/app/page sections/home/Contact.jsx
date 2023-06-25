'use client'
// library
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"
import axios from "axios"
import React, { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function Contact() {
    const contactList = [
        {
            id: 1,
            label: "Contact Number",
            value: "443-768-8300 / 443-600-4337",
            icon: <PhoneIcon width={25} />
        },
        {
            id: 2,
            label: "WhatsApp Number",
            value: "443-600-4337",
            icon: <FaWhatsapp />
        },
        {
            id: 3,
            label: "Our Email",
            value: "kingshiptechnologies@gmail.com",
            icon: <EnvelopeIcon width={25} />
        },
        {
            id: 4,
            label: "Our Location",
            value: "5671 Baltimore MD, 21060",
            icon: <MapPinIcon width={25} />
        },
    ]
    const [input, setInput] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const contactSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: input.name,
            message: input.message,
            email: input.email,
            phone: input.phone
        }
        // const response =   await fetch('/api/Admins/contact', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }, 
        //         body: JSON.stringify(data)
        //     })
        // if (!response.ok) {
        //     throw new Error("Network response was not ok");
        // }
        // const res = await response.json()
        // console.log('worked.....................')
        // return res;\
        axios.post(`/api/Admins/contact`, data)
            .then(() => console.log('worked')).catch((err) => console.log(err))
    }
    return (
        <section id="contact" className=" bg-black px-5 py-7 md:px-14 md:py-14">
            <div className=" flex flex-col gap-y-5 items-center mb-10 lg:mb-16">
                <h1 className=" text-white capitalise text-xl font-semibold md:text-3xl">
                    Contact us
                </h1>
            </div>
            <div className=" flex flex-col gap-y-16 md:gap-y-32 lg:flex-row lg:gap-x-20">
                <div className=" flex flex-col gap-y-8 lg:basis-1/2">
                    {/* questions */}
                    <div className=" flex flex-col items-center gap-y-2 md:items-start lg:gap-y-5">
                        <h2 className=" text-white text-2xl font-bold md:text-3xl xl:text-5xl">Have a Quick Query?</h2>
                        <p className=" text-white text-center md:text-start md:text-lg xl:text-2xl">Would you like to enquire about any of our training or services?</p>
                    </div>

                    {/* social handles */}
                    <div className=" flex flex-col gap-y-8">
                        {contactList.map(({ id, label, value, icon }) => {
                            return (
                                <div key={id} className=" flex items-center gap-x-4">
                                    <div className=" text-orange-500 text-2xl">
                                        {icon}
                                    </div>
                                    <div className=" flex flex-col gap-y-2">
                                        <h5 className=" text-white text-lg font-semibold">{label}</h5>
                                        <p className=" text-white">{value}</p>
                                    </div>
                                    <hr className=" text-orange-500 my-5" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className=" bg-white p-6 rounded-md lg:basis-1/2">
                    <div className=" flex flex-col items-center gap-y-2 mb-10">
                        <h2 className=" uppercase text-orange-500 text-2xl font-bold">
                            Drop a message
                        </h2>
                        <p className=" text-center font-medium text-lg md:text-start">
                            How may we help you?
                        </p>
                    </div>

                    <form method="post"  onSubmit={contactSubmit}
                        className=" flex flex-col gap-3 max-w-screen-md mx-auto lg:gap-y-8"
                    >
                        <input type="text" onChange={inputHandle} value={input.name} name="name" placeholder="Name" className=" form-input rounded-md" />
                        <input type="email" onChange={inputHandle} value={input.email} name="email" placeholder="Email" className=" form-input rounded-md" />
                        <input type="number" onChange={inputHandle} value={input.phone} name="phone" placeholder="Phone Number" className=" form-input rounded-md" />
                        <textarea name="message" placeholder=" Type your message here" onChange={inputHandle} value={input.message} className="w-full form-textarea rounded-md"></textarea>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white w-fit py-2 px-6 rounded-md duration-300 ease-in-out hover:bg-black">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}