import Link from "next/link";
import Image from "next/image";
// images
import register from '../../../public/images/register.png'
import SectionWrapper from "../components/SectionWrapper";
const Welcome = () => {
    return (
        <section className=' bg-orange-50 min-h-screen flex flex-col justify-center items-center px-5 pt-24 md:px-14'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 lg:items-center lg:max-w-screen-lg lg:mx-auto'>
                <div>
                    <Image src={register} alt="" />
                </div>
                <div className=' flex flex-col'>
                    <h1 className=' text-3xl text-center text-orange-500 font-semibold tracking-wider mb-2 lg:text-start'>
                        Welcome
                    </h1>
                    <p className=' text-sm text-center mb-5 opacity-75 lg:text-start lg:text-base'>
                        Your journey in the cyber field begins here
                    </p>
                    <div className=' flex flex-col items-center gap-y-5'>
                        <Link
                            href="signup"
                            className=' bg-orange-500 w-full py-2 rounded-lg text-center border-2 border-orange-500'
                        >
                            <button className=' text-white'>
                                Get Started
                            </button>
                        </Link>
                        {/* <Link
                        to="signin"
                        className=' bg-transparent w-full py-2 rounded-lg border-2 border-orange-500 duration-200 ease-in-out text-center text-orange-500 lg:hover:text-white lg:hover:bg-orange-500'
                    >
                        <button>
                            Already have an account
                        </button>
                    </Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionWrapper( Welcome);