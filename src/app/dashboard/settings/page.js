'use client'

import { useState } from "react";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import SectionWrapper from "../wrapper/Wraper"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Phone(props) {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            // redirect('http://localhost:3000/signin?callbackUrl=/dashboard')
            redirect('https://kingshiptechnologies.com/signin?callbackUrl=/dashboard')
        }
    })
    const notify = () => toast.error("Error please contact the Admin ", {
        position: toast.POSITION.TOP_LEFT
    });
    const good= () => toast.success("Phone number added", {
        position: toast.POSITION.TOP_LEFT
      });
    const [name, setName] = useState({ name: session?.user?.name })
    const [phone, setPhone] = useState('');
    const onchangeInput = (e) => {
        setName(e.target.value)
    }
    const onchangePhone = (e) => {
        setPhone(e.target.value)
    }
    const updateFetch = (e) => {
        e.preventDefault()
        const data = {
            email:session?.user?.email,
            phone:phone
        }
        axios.put(`/api/Admins/register/${session?.user?.email}`, data).then((res) => {
            if (res.data.status === 404) {
                notify()
            } else if(res.data.status === 200) {
               good()
            }
        }).catch((err)=>console.log(err))
    }
    return (
        <>
            <Navabr />
            <Hero name={session?.user?.name} />
            <div className="container">
                <div className="mt-3 font-bold ">
                    <div className="m-5">
                        <h1 className="text-center">Settings  </h1>
                        <input onChange={onchangeInput} value={name.name} className="shadow appearance-none border rounded mt-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5" />
                        <ToastContainer/>
                        <form className="mt-4 " onSubmit={updateFetch}>
                      
                            <p>Please provide your phone number for continuous updates.</p>
                            <input onChange={onchangePhone} value={ phone} placeholder="input your phone number " className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" type="number"></input>
                            <button type="submit" className='mt-3 border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Phone