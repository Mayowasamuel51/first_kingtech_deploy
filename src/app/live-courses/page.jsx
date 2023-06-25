import Image from "next/image";
import Link from "next/link";
import {
  BsFillCalendarEventFill,
  BsFillClockFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import Image_1 from "../../../public/images/security training.png";
import Image_2 from "../../../public/images/certified cyber.png";
import Experts from "../components/Experts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
const Courses = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="w-full">
      <div className="bg-hero-desktop bg-no-repeat bg-cover min-h-screen flex justify-center items-center flex-col">
        <div className="absolute bg-black/50 w-full min-h-screen top-0 left-0"></div>
        <div className="absolute pt-32">
          <h2 className="text-center text-4xl md:text-6xl font-semibold capitalize  text-white">
            Live courses
          </h2>

          <p className="md:text-xl text-lg text-white font-normal text-center p-10">
            Welcome to our live courses! Join our learning community and expand
            your knowledge.
          </p>
        </div>
      </div>

      <div className="my-16 md:mx-14 mx-5 grid gap-10">
        <div className="flex flex-col border-gray-300 border-2 rounded-md p-5 lg:flex-row lg:items-center">
          <div className=" lg:basis-1/2">
            <Image src={Image_1} alt="Cyber security illustration" />
          </div>
          <div className=" flex flex-col gap-y-4 lg:basis-1/2">
            <h2 className=" text-2xl font-semibold uppercase">
              cyber-security
            </h2>
            <div className="flex flex-col gap-y-4">
              <span className=" flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <BsFillCalendarEventFill className="text-4xl" />
                <span>5 Weeks</span>
              </span>
              <span className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <BsFillClockFill className="text-4xl" />
                <span>10am - 2:30pm</span>
              </span>
              <span className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <SlScreenDesktop className="text-4xl" />
                <span>Virtual live classes</span>
              </span>
              <span className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <BsFillCreditCardFill className="text-4xl" />
                <span>$1,000</span>
              </span>
            </div>

            <Link
              href="register"
              className="flex flex-col justify-center items-start"
            >
              <button className=" bg-orange-500 hover:bg-transparent border-2  py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-black hover:text-black">
                register
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border-2 rounded-md p-5 lg:flex-row lg:items-center">
          <div className=" lg:basis-1/2">
            <Image src={Image_2} alt="Security+ illustration" />
          </div>
          <div className="flex flex-col gap-y-4 lg:basis-1/2">
            <h2 className="text-2xl font-semibold uppercase">
              securtiy+ training
            </h2>
            <div className="flex flex-col gap-y-4">
              <span className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <BsFillCalendarEventFill className="text-4xl" />
                <span>12 Weeks</span>
              </span>
              <span className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <BsFillClockFill className="text-4xl" />
                <div className=" flex flex-col">
                  <p className=" flex flex-col md:flex-row md:gap-x-1">
                    Mondays & Thursdays<span>(7pm - 9pm)</span>
                  </p>
                  <p className=" flex flex-col md:flex-row md:gap-x-1">
                    Saturday<span>(11am - 1pm)</span>
                  </p>
                </div>
              </span>
              <span className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <SlScreenDesktop className="text-4xl" />
                <span>Virtual live classes</span>
              </span>
              <span className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-3">
                <BsFillCreditCardFill className="text-4xl" />
                <span>$2,000</span>
              </span>
            </div>

            <Link
              href="register"
              className="flex flex-col justify-center items-start"
            >
              <button className=" bg-orange-500 hover:bg-transparent border-2  py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-black hover:text-black">
                register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Experts />
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default SectionWrapper(Courses);
