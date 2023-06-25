import Link from "next/link";
import Image from "next/image";
// assests
import about from '../../../../public/images/AboutCompany.jpg'
// library
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function About() {
    return (
        <section className=" px-5 my-7 flex flex-col items-center md:px-14 md:my-14">
            <h1 className=" capitalise text-xl font-semibold mb-10 bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent md:text-3xl lg:mb-16">
                About Us
            </h1>
            <div className=' flex flex-col items-center gap-y-8 lg:flex-row lg:items-stretch lg:gap-x-10'>
                <div className=' basis-1/2'>
                    <Image src={about} alt=" about Kingship" />
                </div>
                <div className=' basis-1/2 flex flex-col gap-y-10'>
                    <p className=' text-center lg:text-start'>
                        Welcome to Kingship Technologies, your premier destination for cutting-edge cybersecurity training. Our mission is to empower individuals and organizations with the skills and knowledge required to safeguard their digital assets in an increasingly connected world.
                        <br /><br />
                        At Kingship Technologies, we understand the continuously evolving nature of cybersecurity threats and the critical need for well-trained professionals to protect against them. That's why we've developed a comprehensive training program designed to equip you with the latest tools, techniques, and best practices in the field of cybersecurity.
                    </p>
                    <br />
                    <Link
                        href="about"
                        className=" bg-orange-500 px-5 py-1 rounded-md w-fit text-white flex items-center gap-x-2 font-medium duration-300 ease-in-out hover:bg-black lg:text-lg"
                    >
                        Learn More
                        <span>
                            <ArrowRightIcon width={15} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}