"use client";
import React, { useState } from "react";
import logo from "../../../assets/logo-two.jpeg";
import Link from "next/link";
import Profile from "./Profile";
import Image from "next/image";
import Notification from "./Notification";
import { FaBell } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navabr = () => {
  const [notif, setNotif] = useState(false);
  const handleNotif = () => {
    setNotif((prev) => !prev);
  };

  return (
    <>
      <header className="w-full relative bg-slate-50 p-1 shadow-md">
        <div className="flex flex-1 justify-between items-center align-middle mx-auto py-2.5">
          <Link className="mx-4 relative " href="AdminLayouts">
            <Image
              src={logo}
              alt=""
              className="relative  md:w-[80px] md:h-[60px] w-[60px] h-[60px] rounded-full "
              width={500}
              height={500}
            />
          </Link>
          {/* <Searchbar /> */}
          <div className="w-full md:flex gap-10 items-center justify-center hidden">
            {/* <Link href="/" className="text-base">
              Courses
            </Link> */}

            <Link href="/dashboard" className="text-base">
              Home
            </Link>
<<<<<<< HEAD
  
=======

>>>>>>> b684650a572364f384ea1d8d0f8301a87da0e49e
            <Link href="/dashboard/rules" className="text-base">
              Our Rules
            </Link>
            <Link href="dashboard/settings" className="text-base">
              Settings
            </Link>
            <Link href="/" className="text-base">
              Announcement
            </Link>
            <Link href="dashboard/question" className="text-base">
             Comment
            </Link>
            <Link href="#" className="text-base">
              Timetable
            </Link>
          </div>
          <Notification notif={notif} />
          <div className="mx-2 flex justify-center items-center float-right relative cursor-pointer">
            <button
              onClick={handleNotif}
              className="text-lg mx-10 inline-block bg-transparent"
            >
              <FaBell />
            </button>
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navabr;
