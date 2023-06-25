'use client'
import React, { useState } from "react";
import logo from "../../../assets/logo-two.jpeg";
import Link from "next/link";
import Profile from "./Profile";
import Image from "next/image";
import Notification from "./Notification";
import { FaBell } from "react-icons/fa";

const Navabr = () => {
  const [notif, setNotif] = useState(false);
  const handleNotif = () => {
    setNotif((prev) => !prev);
  };

  return (
    <>
      <header className="w-full relative bg-slate-50 p-5 shadow-md">
        <div className="flex flex-1 justify-between items-baseline align-middle mx-auto">
          <Link className="mx-4 relative top-5" href=''>
            <Image
              src={logo}
              alt=""
              className="relative top-0 md:w-[80px] md:h-[60px] w-[60px] h-[60px] rounded-full"
              width={50}
              height={50}
            />
          </Link>
          {/* <Searchbar /> */}
          <div className="w-full md:flex gap-10 items-center justify-center hidden">
            <Link href="/" className="text-base">
              Courses
            </Link>

            <Link href="/" className="text-base">
              Apply Form
            </Link>


            <Link href="/" className="text-base">
              Mentorship
            </Link>
            <Link href="/" className="text-base">
              Live Courses
            </Link>
            <Link href="/" className="text-base">
              Timetable
            </Link>
          </div>
          <Notification notif={notif} />
          <div className="mx-2 flex justify-center items-baseline float-right relative cursor-pointer">
            <button
              onClick={handleNotif}
              className="text-lg mx-10 inline-block bg-transparent"
            >
              <FaBell/>
            </button>
            <Profile />
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navabr;
