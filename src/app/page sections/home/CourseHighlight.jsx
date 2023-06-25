'use client'

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// library
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { useInView } from "framer-motion";

import course1 from "../../../../public/images/certified cyber.png"
import course2 from "../../../../public/images/security training.png"

export default function CourseHighlight() {
    const ref = useRef(null)
    const isInView = useInView(ref);

    const courses = [
        {
            id: 1,
            img: course1,
            title: "Certified in Cybersecurity",
            description: "5 weeks of basic fundamentals of cyber security",
            descriptionTwo: "Introduction to Cybersecurity",
            descriptionThree: "Cybersecurity fundamentals",
            descriptionFour: "Threat landscape",
            url: "cybersecurity",
            checkCircle: <CheckCircleIcon width={20} />
        },
        {
            id: 2,
            img: course2,
            title: "Security Plus training",
            description: "11 weeks of training including preperation for the certification and hands on training.",
            descriptionTwo: "Introduction to Cybersecurity and security+",
            descriptionThree: "Security Threats and Vulnerabilities",
            descriptionFour: "Identity and Access Management",
            url: "security-training",
            checkCircle: <CheckCircleIcon width={20} />
        }
    ]

    return (
        <section className=" px-5 py-10 flex flex-col gap-y-5 items-center md:px-14 md:py-20">
            <h1 className=" capitalise text-xl font-semibold bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent md:text-3xl">
                Live Courses
            </h1>
            <div className=" flex flex-col gap-y-10 items-center md:flex-row md:items-stretch md:gap-x-40">
                    {courses.map(({ ...courses }) => {
                        return (
                            <div key={courses.id} className=" flex flex-col gap-y-5 items-center md:items-start md:basis-1/2" ref={ref}>
                                <div className="">
                                    <Image src={courses.img} alt="course" />
                                </div>
                                <div
                                    className=" flex flex-col gap-y-4 md:items-start md:text-start"
                                    style={{
                                        opacity: isInView ? 1 : 0,
                                        transition: "all 3s 0.5s"
                                    }}
                                >
                                    <h3
                                        className=" font-bold uppercase text-lg lg:text-xl"
                                    >
                                        {courses.title}
                                    </h3>
                                    <div className=" flex flex-col gap-y-2 md:h-56 ">
                                        <p className=" text-sm opacity-75 font-medium lg:text-lg">
                                            {courses.description}
                                        </p>
                                        <br />
                                        <p className=" text-sm opacity-75 flex items-center gap-x-1 lg:text-lg">
                                            {courses.checkCircle} {courses.descriptionTwo}
                                        </p>
                                        <p className=" text-sm opacity-75 flex items-center gap-x-1 lg:text-lg">
                                            {courses.checkCircle} {courses.descriptionThree}
                                        </p>
                                        <p className=" text-sm opacity-75 flex items-center gap-x-1 lg:text-lg">
                                            {courses.checkCircle} {courses.descriptionFour}
                                        </p>
                                    </div>
                                    <Link
                                        href={courses.url}
                                    >
                                        <button
                                            className=" bg-orange-500 px-5 py-1 rounded-md text-white flex items-center gap-x-2 font-medium duration-300 ease-in-out hover:bg-black lg:text-lg"
                                        >
                                            More
                                            <span>
                                                <ArrowRightIcon width={15} />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </section>
    )
}