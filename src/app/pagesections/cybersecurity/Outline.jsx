import Link from "next/link";
import {
  BsFillCalendarEventFill,
  BsFillClockFill,
  BsFillCreditCardFill,
} from "react-icons/bs";

import { SlScreenDesktop } from "react-icons/sl";

const Outline = () => {
  return (
    <>
      <div className=" bg-aboutBanner bg-cover bg-no-repeat min-h-[20vh] rounded-md my-10 mx-5 md:mx-14 relative py-12 flex flex-col items-center gap-y-5">
        <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
        <div className="flex flex-col items-start gap-y-5 md:flex-row md:justify-between w-full px-10">
          <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 md:justify-center justify-start items-center z-20">
            <BsFillCalendarEventFill className="text-4xl" />
            <span>5 Weeks</span>
          </span>
          <span className="text-white font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
            <BsFillClockFill className="text-4xl" />
            <div className="flex flex-col">
              <p className=" flex flex-col md:flex-row md:gap-x-1">
                Mondays & Thursdays<span>(10am - 2:30am)</span>
              </p>
              <p className=" flex flex-col md:flex-row md:gap-x-1">
                Saturday<span>(11am - 1pm)</span>
              </p>
            </div>
          </span>
          <span className="text-white font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
            <SlScreenDesktop className="text-4xl" />
            <span>Virtual live classes</span>
          </span>
          <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 justify-center items-center z-20">
            <BsFillCreditCardFill className="text-4xl" />
            <span>$1,000</span>
          </span>
        </div>
        <Link href="register" className=" z-20">
          <button className=" bg-transparent border-2 border-white py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-orange-500 hover:text-orange-500">
            register
          </button>
        </Link>
      </div>
    </>
  );
};

export default Outline;
