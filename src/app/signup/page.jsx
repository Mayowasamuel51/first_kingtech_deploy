'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import axios from "axios"
import React, { useEffect, useState } from "react"
import signup from '../../../public/images/signup.png'
import SectionWrapper from '../components/SectionWrapper'
import { redirect, useRouter } from 'next/navigation';
import { signIn, getProviders, useSession } from 'next-auth/react';
import Provider from '../SessionProvider';
import NextAuth from 'next-auth/next';
// export const metadata = {
//     title: 'Signup  Kingship Technologies',
//     description: 'Cyber Security e-learning platform',  
//     keywords: "cybersecurity training, cybersecurity courses, information security, cyber defense, network security, ethical hacking, penetration testing, data privacy",
//     content:" Prepare for the Security+ certification exam with our comprehensive guide. Learn essential cybersecurity concepts, network security, cryptography, and risk management. Gain the knowledge and skills needed to protect networks, identify vulnerabilities, and respond to security incidents. Start your journey towards a rewarding cybersecurity career today." 
//   }
const Signup = () => {
    const session = useSession()
    const router = useRouter()
    const notify = () => toast.error("Error refresh your page !", {
        position: toast.POSITION.TOP_LEFT
    });
    const [input, setInput] = useState({
        name: '',
        hashPassword: '',
        email: '',
    })
    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (session?.status === 'authenticated') {
            // router.push('http://localhost:3000/dashboard')
            router.push('https://kingshiptechnologies.com/dashboard')
        }
    })
    const handleSignIn = () => {
        // signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' });
        signIn('google',{callbackUrl:'https://kingshiptechnologies.com/dashboard'}); 
    };
    const signupSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: input.name,
            email: input.email,
            hashPassword: input.hashPassword
        }
        // axios.post(`/api/register`, data)
        //     .then(() => {
        //         router.push('http://localhost:3000/signin')
        //         console.log('worked......')
        //     })
        //     .catch((err) => {
        //         notify()
        //         alert(err)
        //     })
        axios.post(`/api/register`, data)
            .then((res) => {
                if (res.data.status === 404) {
                    toast.error('This email has been registered')
                } else {
                    router.push('https://kingshiptechnologies.com/signin')
                    // router.push('http://localhost:3000/signin')
                    console.log('worked......')
                    toast.success('proceeding to  signin page ')
                }
            })
            .catch((err) => {
                notify()
                alert(err)
            })
    }
    return (
        <section className=' bg-orange-50 min-h-screen flex flex-col justify-center items-center px-5 pt-28 md:px-14'>
            <div className=' grid grid-cols-1 gap-y-5 mb-10 lg:grid-cols-2 lg:gap-x-5 lg:items-center lg:max-w-screen-lg lg:mx-auto'>
                <div>
                    <Image src={signup} alt="signup" />
                </div>
                <div className=' flex flex-col gap-y-5'>
                    <h1 className=' text-3xl text-center text-orange-500 font-semibold tracking-wider mb-2 lg:text-start'>
                        Sign Up
                    </h1>

                    <form
                        onSubmit={signupSubmit}
                        className=' flex flex-col items-center gap-y-5'
                    >
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <UserIcon width={25} className=' text-gray-500' />
                            <input type="text" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter full name' onChange={inputHandle} value={input.name} name='name' required />
                        </div>
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <EnvelopeIcon width={25} className=' text-gray-500' />
                            <input type="email" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter email address' onChange={inputHandle} value={input.email} name='email'  required/>
                        </div>
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <LockClosedIcon width={25} className=' text-gray-500' />
                            <input type="password" required className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Password' onChange={inputHandle} value={input.hashPassword} name='hashPassword' />
                        </div>
                        <div className=' flex items-center gap-x-5 place-self-start'>
                            <input type="checkbox" className=' form-checkbox' name='checkbox' required />
                            <label htmlFor='checkbox' className=' text-sm lg:text-base text-gray-500'>
                                By signing up, you agree to our
                                <Link
                                    href="/terms"
                                    className=' text-orange-500 pl-2 '
                                >
                                    terms & conditions
                                </Link>
                            </label>
                        </div>
                        <div className='text-center'>
                            <ToastContainer />
                        </div>
                        <button type='submit' className=' bg-orange-500 py-2 rounded-lg text-white font-medium w-full lg:hover:bg-opacity-90'>
                            Continue
                        </button>
                        <span>OR</span>

                    </form>
                    {/* {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                }}
                                className='black_btn'
                            >
                                Sign inss
                            </button>
                        ))} */}
                    {/* <button onClick={handleSignIn} className=' bg-transparent border-solid border-2 border-black py-2 rounded-lg text-black font-medium w-full duration-200 ease-in-out lg:hover:bg-black lg:hover:text-white'>
                        Sign up with Google
                    </button> */}
                    <button onClick={handleSignIn} className=' bg-transparent border-solid border-2 border-black py-2 rounded-lg text-black font-medium w-full duration-200 ease-in-out lg:hover:bg-black lg:hover:text-white'>
                        Sign in with Google
                    </button>
                    <p className=' text-sm text-gray-500 text-center lg:text-base'>
                        Already have an account? <Link href="signin" className=' text-orange-500'>Sign In</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SectionWrapper(Signup);


















// https://youtu.be/FGqbAx0U7z0