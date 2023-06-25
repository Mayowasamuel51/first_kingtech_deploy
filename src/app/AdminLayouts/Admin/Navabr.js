"use client";
import React, { useState } from "react";
import logo from "../../assets/logo-two.jpeg";
import Link from "next/link";
import Image from "next/image";
import { FaCaretDown, FaArrowAltCircleRight } from "react-icons/fa";

const Navabr = () => {
  const [notif, setNotif] = useState(false);
  const handleNotif = () => {
    setNotif((prev) => !prev);
  };

  return (
    <>
      <header className="w-full relative bg-slate-50 p-5 shadow-md">
        <div className="flex flex-1 justify-between items-baseline align-middle mx-auto">
          <Link className="mx-4 relative top-5" href="">
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
              Add Course
            </Link>
            <Link href="/admin_pages" className="text-base">
              See All Students
            </Link>
            <Link href="/admin_pages/broadcast" className="text-base">
              Broadcast Messsage
            </Link>
          </div>
          {/* <Notification notif={notif} /> */}
          <div className="mx-2 float-right relative cursor-pointer">
            <Link href={""} className="flex justify-center items-baseline">
              <span className="mx-3">Logout </span> <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navabr;
