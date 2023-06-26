'use client'

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// library
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { useInView } from "framer-motion";
// assests
import mentorship from '../../../../public/images/mentorship.jpg'

export default function Mentorship() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <section className=" px-5 mt-7 pb-8 flex flex-col-reverse gap-y-8 md:pb-14 md:px-14 md:mt-14 lg:flex-row lg:gap-x-8">
            <div className=" flex flex-col items-center gap-y-5 md:items-start basis-1/2">
                <h1 className=" capitalise text-xl font-semibold text-center bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent md:text-3xl lg:text-start">
                    Our Mentorship Program
                </h1>
                <div className=" flex flex-col gap-y-4 items-start">
                    <div className="  flex flex-col gap-y-2" ref={ref}>
                        <p
                            className=" text-sm opacity-75 font-semibold lg:text-lg"
                            style={{
                                transform: isInView ? "none" : "translateX(-300px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 3s 0.5s"
                            }}
                        >
                            This is a 5 week mentorship program in Career Development.
                        </p>
                        <p
                            className=" text-sm opacity-75 flex items-center gap-x-1 lg:text-lg"
                            style={{
                                transform: isInView ? "none" : "translateX(-300px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 3s 0.5s"
                            }}
                        >
                            We help guide you in your professional career especially if you need next steps before or after getting certified.
                        </p>
                        <p
                            className=" text-sm opacity-75 flex items-center gap-x-1 lg:text-lg"
                            style={{
                                transform: isInView ? "none" : "translateX(-300px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 3s 0.5s"
                            }}
                        >
                            Our instructors will provide you both technical and soft skills, and guidance on developing teamwork, communication, network building.
                        </p>
                    </div>

                    <Link
                        href="/mentorship"
                        className="bg-orange-500 px-5 py-1 rounded-md text-white flex items-center gap-x-2 duration-300 ease-in-out hover:bg-black lg:mt-28"
                        style={{
                            transform: isInView ? "none" : "translateX(-300px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 3s 0.5s"
                        }}
                    >
                        More
                        <span>
                            <ArrowRightIcon width={15} />
                        </span>
                    </Link>
                </div>
            </div>
            <div className=" basis-1/2">
                <Image src={mentorship} alt="mentorship" />
            </div>
        </section>
    )
}