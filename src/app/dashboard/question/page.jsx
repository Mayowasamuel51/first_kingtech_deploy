"use client";
import SectionWrapper from "../wrapper/Wraper";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import { useSession } from 'next-auth/react';
import axios from "axios";
import { redirect } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
function AskQ() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            // redirect('http://localhost:3000/signin?callbackUrl=/dashboard')
            redirect('https://kingshiptechnologies.com/signin?callbackUrl=/dashboard')
        }
    })
    console.log(session)
    const notify = () => toast.error("Error please contact the Admin ", {
        position: toast.POSITION.TOP_LEFT
    });
    const good = () => toast.success("Thank You!!", {
        position: toast.POSITION.TOP_LEFT
    });
    const [commnet, setComment] = useState('');
    const onchangeComment = (e) => {
        setComment(e.target.value)
    }
    const commentFetch = (e) => {
        e.preventDefault()
        const data = {
            email:session?.user?.email,
            commnet:commnet
        }
        axios.post(`/api/Admins/register/${session?.user?.email}`, data).then((res) => {
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
                        <h1>Drop a Comments</h1>
                        <ToastContainer/>
                        <form className="mt-3" onSubmit={commentFetch}>
                            <textarea onChange={onchangeComment} value={commnet} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"></textarea>
                            <button  type="submit" className=' border-2 mt-4 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default
    // SectionWrapper(
    AskQ
// );
