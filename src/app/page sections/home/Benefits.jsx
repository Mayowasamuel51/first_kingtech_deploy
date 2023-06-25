'use client'
import { useRef } from "react";
import Image from "next/image";
// library
import { useInView } from "framer-motion";
// images
import illustrationOne from '../../../../public/images/no-exp.webp'
import illustrationTwo from '../../../../public/images/classes.webp'

export default function Benefits() {
    const benefits = [
        {
            id: 1,
            img: illustrationOne,
            heading: "Tailored to you",
            paragraph: "Regardless of your experience you will be able to learn even with no prior experience."
        },
        {
            id: 2,
            img: illustrationTwo,
            heading: "Bite-sized",
            paragraph: "Classes will be taken one step at a time with quizzess and assessments that follow to ensure you have complete understanding."
        },
        {
            id: 3,
            img: illustrationTwo,
            heading: "Get proof",
            paragraph: "Earn a certificate in 6 months to validate your newly acquired skills. Post it on social for others to see."
        }
    ]

    const ref = useRef(null)
    const isInView = useInView(ref);

    return (
        <section className=" px-5 my-14 md:my-24 md:px-14">
            <div className=" flex flex-col items-center gap-y-4 lg:flex-row lg:justify-center lg:gap-x-10" ref={ref}>
                {benefits.map(({ id, img, heading, paragraph }) => {
                    return (
                        <div
                            style={{
                                opacity: isInView ? 1 : 0,
                                transition: "all 3s 0.5s"
                            }}
                            key={id}
                            className="p-10 bg-blue-50 rounded-md flex flex-col gap-y-5 lg:w-72 lg:h-[480px]"
                        >
                            <Image src={img} alt="illustration" />
                            <h3 className=" text-2xl">{heading}</h3>
                            <p className="">{paragraph}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}