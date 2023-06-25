'use client'

import { useRef } from "react";

import Image from "next/image";

import { useInView } from "framer-motion";

import fastTrack from '../../../../public/images/fast-track.png'
import industryExpert from '../../../../public/images/industry-expert.png'
import jobInterview from '../../../../public/images/job-interview.png'

export default function Why() {

    const ref = useRef(null)
    const isInView = useInView(ref);

    return (
        <section className=" px-5 pt-7 flex flex-col items-center gap-y-7 bg-orange-50 overflow-hidden md:px-14 md:pt-20">
            <h1 className=" capitalise text-xl font-semibold bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent md:text-3xl">
                Why Kingship Technologies
            </h1>

            <div className=" flex flex-col items-center gap-y-8" ref={ref}>

                <div
                    className=" flex flex-col-reverse gap-y-8 max-w-screen-lg mx-auto md:flex-row md:items-center md:gap-x-10"
                    style={{
                        transform: isInView ? "none" : "translateX(900px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 4s 0.5s"
                    }}
                >
                    <div className=" md:basis-1/2">
                        <Image src={fastTrack} alt="Fast Track" />
                    </div>
                    <div className=" flex flex-col gap-y-2 md:basis-1/2">
                        <h4 className=" text-orange-400 uppercase text-sm">
                            Fast-track your learning
                        </h4>
                        <h2 className=" text-2xl font-medium">
                            Clear and Concise
                        </h2>
                        <p className=" text-lg text-slate-700">
                            Our academy is committed to providing clear and concise information to our students. We believe that students should be able to access the information they need quickly and easily, without having to wade through unnecessary jargon or fluff.
                        </p>
                    </div>
                </div>
                <div
                    className=" flex flex-col-reverse gap-y-8 max-w-screen-lg mx-auto md:flex-row-reverse md:items-center md:gap-x-10"
                    style={{
                        transform: isInView ? "none" : "translateX(-900px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 4s 0.5s"
                    }}
                >
                    <div className=" md:basis-1/2">
                        <Image src={jobInterview} alt="Job Interview" priority />
                    </div>
                    <div className=" flex flex-col gap-y-2 md:basis-1/2">
                        <h4 className=" text-orange-400 uppercase text-sm">
                            Boost your career options
                        </h4>
                        <h2 className=" text-2xl font-medium">
                            Navigating the Job Search Process
                        </h2>
                        <p className=" text-lg text-slate-700">
                            We provide students with the tools and resources they need to succeed in the job search process. We offer career counseling, resume writing assistance, and interview preparation. Our goal is to help students find the right job for them and achieve their career goals.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}