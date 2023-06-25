import React, { useState, useEffect} from "react";
import profile from "../../../assets/person_1.jpg";
import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { FaSearch } from "react-icons/fa";


const Profile = () => {
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow((prev) => !prev);
  };

  const ref = useRef()

  const clickMenu = useCallback((e) => {
    if(ref.current && !ref.current.contains(e.target)){
        setShow(false)
    }
  }, [show])

  useEffect(() => {
    document.addEventListener('click', clickMenu)
  }, [clickMenu])

  return (
    <>
      <div
        className={`px-2 inline-block relative top-3 cursor-pointer`}
        onClick={handleMenu}
        ref={ref}
      >
        <Image
          src={profile}
          alt=""
          className="rounded-full md:w-[100px] md:h-[50px] w-[50px] h-[50px] "
        />
      </div>

      {/* Profile dropdown */}

      <div
        className={`absolute top-[4.5em] right-5 w-[20rem] bg-slate-50 shadow-md z-50 max-h-max rounded-sm sm:p-6 p-10 ${
          show ? "block" : "hidden"
        }`}
        style={{
          transitionTimingFunction: "ease-in",
          transitionDelay: "1.5s",
          transitionDuration: "2.5s",
          transitionProperty: 'all'
        }}
      >
        <div className="flex flex-1 justify-center align-baseline gap-5 items-center mb-4 p-2">
          <Image
            src={profile}
            alt=""
            className="rounded-full relative"
            width={60}
            height={60}
          />
          <Link className="flex flex-col leading-6 items-center" href="/">
            <span className="text-[15px] font-medium">Student Name</span>
            <small className="text-[10px]">studentname@email.com</small>
          </Link>
        </div>

        <hr />

        <div className="mt-3 p-1 md:hidden block">
          <div className="flex flex-1 justify-center items-center align-baseline mx-auto gap-0 ">
            <button className="text-sm border-0 bg-black text-white p-2">
              <FaSearch/>
            </button>
            <input
              type="seach"
              placeholder="search a course.."
              className="bg-white p-2 focus:outline-none"
            />
          </div>
        </div> 
         <hr /> 

        <div className="mt-3">
          <ul className="list-none leading-10">
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="/" className="text-[12px]">
                Live Courses
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="/" className="text-[12px]">
                Timetable
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="/" className="text-[12px]">
                Class work
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href="/" className="text-[12px]">
                Notes
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div className="mt-3">
          <ul className="list-none leading-10">
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href={"/"} className="text-[12px]">
                Review
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href={"/"} className="text-[12px]">
                Payments
              </Link>
            </li>
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href={"/"} className="text-[12px]">
                Ask a question
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div className="mt-3">
          <ul className="list-none leading-10">
            <li className="hover:bg-slate-200 hover:px-2 transition">
              <Link href={"/"} className="text-[12px]">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
