'use client'

import Link from 'next/link'
// library
import { motion, AnimatePresence } from 'framer-motion';

export default function ToggleMenu({ isOpen, setIsOpen }) {

    const links = [
        {
            id: 1,
            url: "",
            link: 'home'
        },
        {
            id: 2,
            url: "cybersecurity",
            link: 'cyber security',
        },
        {
            id: 3,
            url: "security-training",
            link: 'security plus training',
        },
        {
            id: 4,
            url: "mentorship",
            link: "mentorship"
        },
        {
            id: 5,
            url: "about",
            link: 'about'
        },
        {
            id: 6,
            url: "blog",
            link: 'blog'
        },
    ]

    // animation
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

    const handleToggle = () => {
        setIsOpen(false)
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={item}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        transition={{ duration: .3 }}
                        exit="exit"
                        className=' bg-black p-10 text-white fixed w-full top-20 z-50 h-screen flex flex-col items-center gap-y-5 md:hidden'
                    >
                        <ul className='flex flex-col items-center gap-y-5'>
                            {links.map(({ id, link, url }) => {
                                return (
                                    <motion.li
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
                                        key={id}
                                        onClick={handleToggle}
                                    >
                                        <Link
                                            href={`/${url}`}
                                            className=' font-["Poppins"] capitalize opacity-75 hover:border-b-2 hover:border-b-teal-500 md:text-sm'
                                        >
                                            {link}
                                        </Link>
                                    </motion.li>
                                )
                            })}
                        </ul>
                        <Link
                            onClick={handleToggle}
                            href="/register"
                            className=' font-["Poppins"] opacity-75 border-2 border-orange-500 rounded px-4 py-1 md:text-sm'
                        >
                            Register
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}