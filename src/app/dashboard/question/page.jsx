'use client'
import SectionWrapper from "../wrapper/Wraper";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
function AskQ() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('http://localhost:3000/signin?callbackUrl=/dashboard')
        }
    })
    console.log(session)
    return (
        <>
            <Navabr />
            <Hero name={session?.user?.name} />
            <div className="container">
                <div className="mt-3 font-bold ">
                    <div className="m-5">
                        <h1>Drop a Comment</h1>
                        <form className="mt-3">
                            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"></textarea>
                            <button className=' border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'>Submit</button>
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