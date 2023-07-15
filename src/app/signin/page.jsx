'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import { useSession, signIn, signOut } from 'next-auth/react'
// library
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import SectionWrapper from '../components/SectionWrapper'
import signin from '../../../public/images/signin.png'
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
export const metadata = {
    title: 'Sigin Kingship Technologies',
    description: 'Cyber Security e-learning platform',  
    keywords: "cybersecurity training, cybersecurity courses, information security, cyber defense, network security, ethical hacking, penetration testing, data privacy",
    content:" Prepare for the Security+ certification exam with our comprehensive guide. Learn essential cybersecurity concepts, network security, cryptography, and risk management. Gain the knowledge and skills needed to protect networks, identify vulnerabilities, and respond to security incidents. Start your journey towards a rewarding cybersecurity career today." 
  }
const Signin = () => {
    const session = useSession()
    const router = useRouter()
    useEffect(() => {
        if (session?.status === 'authenticated') {
            // router.push('http://localhost:3000/dashboard')
            router.push('https://kingshiptechnologies.com/dashboard')
            
            
        }
    })
    const [data, setData] = useState({
        email: '',
        password: ''
    })
  
    const handleSignIn = () => {
        signIn('google',{callbackUrl:'https://kingshiptechnologies.com/dashboard'});
        // signIn('google',{callbackUrl:'http://localhost:3000/dashboard'}); // Initiates the Google login flow
      };
    const loginUser = async (e) => {
        e.preventDefault()
        signIn('credentials',{
                ...data, redirect: false
            })
            .then((callback) => {
                if (callback?.error) {
                    toast.error(callback.error)
                }
                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in successfully!')
                }
            })
    }
   
    return (
        <section className=' bg-orange-50 min-h-screen flex flex-col justify-center items-center px-5 pt-28 md:px-14'>
            <div className=' grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-5 lg:items-center lg:max-w-screen-lg lg:mx-auto'>
                <div>
                    <Image src={signin} alt="signin" priority />
                </div>
                <div className=' flex flex-col gap-y-5'>
                    <h1 className=' text-3xl text-center text-orange-500 font-semibold tracking-wider mb-2 lg:text-start'>
                        Sign In
                    </h1>
                    <form onSubmit={loginUser} method='post'
                        className=' flex flex-col items-center gap-y-5'
                    >
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <EnvelopeIcon width={25} className=' text-gray-500' />
                            <input type="email" required name='email' className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter email address ' value={data.email}
                                onChange={e => setData({ ...data, email: e.target.value })} />
                        </div>
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <LockClosedIcon width={25} className=' text-gray-500' />
                            <input type="password" required name="password" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Password' value={data.password}
                                onChange={e => setData({ ...data, password: e.target.value })} />
                        </div>
                        <div className="text-center">
                            <ToastContainer />
                        </div>

                        <button type='submit' className=' bg-orange-500 py-2 rounded-lg text-white font-medium mt-10 w-full lg:hover:bg-opacity-90'>
                            Login
                        </button>
                        {/* <span>OR</span> */}
                        {/* <button onClick={signIn_user} className=' bg-transparent border-solid border-2 border-black py-2 rounded-lg text-black font-medium w-full duration-200 ease-in-out lg:hover:bg-black lg:hover:text-white'>
                            Sign in with Google
                        </button> */}
                    </form>
                    <button onClick={handleSignIn} className=' bg-transparent border-solid border-2 border-black py-2 rounded-lg text-black font-medium w-full duration-200 ease-in-out lg:hover:bg-black lg:hover:text-white'>
                        Sign in with Google
                    </button>

                    <p className=' text-sm text-gray-500 text-center lg:text-base'>
                        Don't have an account? <Link href="signup" className=' text-orange-500'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SectionWrapper(Signin);