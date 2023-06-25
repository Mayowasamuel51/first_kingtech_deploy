'use client';

import { useState } from 'react';
import Link from 'next/link'

// library
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3BottomRightIcon, XMarkIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

import logo from '../../../public/images/logo.png'
import Image from 'next/image';

// components
import ToggleMenu from './ToggleMenu';

export default function Header() {

    // animation for the dropdown menu
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                // delay: .9
            }
        }
    }

    // const links = [
    //     {
    //         id: 1,
    //         url: "/",
    //         link: 'home'
    //     },
    //     {
    //         id: 2,
    //         // url: "training",
    //         link: 'training',
    //         arrowup: <ChevronUpIcon width={15} />,
    //         arrowdown: <ChevronDownIcon width={15} />
    //     },
    //     {
    //         id: 3,
    //         url: "about",
    //         link: 'about'
    //     },
    //     {
    //         id: 4,
    //         url: "#contact",
    //         link: 'contact'
    //     }
    // ]

    const [isOpen, setIsOpen] = useState(false)
    const [arrowMenu, setArrowMenu] = useState(false)

    const navToggle = () => {
        setIsOpen(!isOpen)
    }
    const dropDown = () => {
        setArrowMenu(!arrowMenu)
    }

    return (
        <>
            <nav className=' px-5 py-1 flex items-center justify-between fixed w-full shadow-lg bg-white z-50 md:px-14'>
                <Link href="/">
                    <Image src={logo} alt='logo' className='w-14' />
                </Link>

                <div className=' hidden md:flex md:flex-row md:items-center md:gap-x-10'>
                    <ul className=' md:flex md:items-center md:gap-x-8'>
                        <li>
                            <Link
                                href="/"
                                className=' capitalize opacity-75 hover:border-b-2 hover:border-b-orange-500'
                            >
                                Home
                            </Link>
                        </li>
                        <AnimatePresence>
                            <li className=' flex items-center gap-x-1 cursor-pointer' onClick={dropDown}>
                                <span className="capitalize opacity-75">
                                    Training
                                </span>

                                <span>
                                    {arrowMenu ? <ChevronUpIcon width={18} /> : <ChevronDownIcon width={18} />}
                                    {arrowMenu && (
                                        <motion.div
                                            variants={item}
                                            initial={{ y: 80, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: .3 }}
                                            exit={{
                                                opacity: 0,
                                                y: 90,
                                                transition: {
                                                    ease: "easeInOut",
                                                    delay: .5
                                                }
                                            }}
                                            className=" absolute top-24 bg-black p-5 rounded-md flex flex-col gap-y-5"
                                        >
                                            <Link
                                                href="/cybersecurity"
                                                className=' text-white hover:border-b-2 hover:border-b-orange-500'
                                            >
                                                Cyber Security
                                            </Link>
                                            <Link
                                                href="/security-training"
                                                className=' text-white hover:border-b-2 hover:border-b-orange-500'
                                            >
                                                Security Training
                                            </Link>
                                            <Link
                                                href="/mentorship"
                                                className=' text-white hover:border-b-2 hover:border-b-orange-500'
                                            >
                                                Mentorship
                                            </Link>
                                        </motion.div>
                                    )}
                                </span>
                            </li>
                        </AnimatePresence>
                        <li>
                            <Link
                                href="about"
                                className=' capitalize opacity-75 hover:border-b-2 hover:border-b-orange-500'
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="blog"
                                className=' capitalize opacity-75 hover:border-b-2 hover:border-b-orange-500'
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className=' capitalize opacity-75 hover:border-b-2 hover:border-b-orange-500'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className='md:flex md:flex-row md:items-center md:gap-x-5'>
                        <Link
                            href="/register"
                            className=' border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'
                        >
                            Register
                        </Link>
                    </div>
                </div>

                <div className=' md:hidden text-slate-500' onClick={navToggle}>
                    {isOpen ? <XMarkIcon width={30} /> : <Bars3BottomRightIcon width={30} />}
                </div>
            </nav>
            <ToggleMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}