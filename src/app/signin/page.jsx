import Link from 'next/link'
import Image from 'next/image'
// library
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import SectionWrapper from '../components/SectionWrapper'
import signin from '../../../public/images/signin.png'

const Signin = () => {

    return (
        <section className=' bg-orange-50 min-h-screen flex flex-col justify-center items-center px-5 pt-28 md:px-14'>
            <div className=' grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-5 lg:items-center lg:max-w-screen-lg lg:mx-auto'>
                <div>
                    <Image src={signin} alt="signin" />
                </div>
                <div className=' flex flex-col gap-y-5'>
                    <h1 className=' text-3xl text-center text-orange-500 font-semibold tracking-wider mb-2 lg:text-start'>
                        Sign In
                    </h1>

                    <form
                        className=' flex flex-col items-center gap-y-5'
                    >
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <EnvelopeIcon width={25} className=' text-gray-500' />
                            <input type="email" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter email address' />
                        </div>
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <LockClosedIcon width={25} className=' text-gray-500' />
                            <input type="password" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Password' />
                        </div>
                        <button className=' bg-orange-500 py-2 rounded-lg text-white font-medium mt-10 w-full lg:hover:bg-opacity-90'>
                            Login
                        </button>
                        <span>OR</span>
                        <button className=' bg-transparent border-solid border-2 border-black py-2 rounded-lg text-black font-medium w-full duration-200 ease-in-out lg:hover:bg-black lg:hover:text-white'>
                            Sign in with Google
                        </button>
                    </form>

                    <p className=' text-sm text-gray-500 text-center lg:text-base'>
                        Don't have an account? <Link href="signup" className=' text-orange-500'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SectionWrapper( Signin);