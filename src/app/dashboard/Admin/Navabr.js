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
      <header className="w-full relative bg-slate-50 p-2 shadow-md">
        <div className="pb-3 flex flex-1 justify-between items-baseline align-middle mx-auto">
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
            <Link href="/dashboard/admin_pages" className="text-base">
              Form Contacts
            </Link>
            <Link href="/dashboard/admin_pages/register" className="text-base">
              Registered Students
            </Link>

            <Link href="/dashboard/admin_pages/broadcast" className="text-base">
              Broadcast Messsage
            </Link>

            <Link href="/dashboard/admin_pages/sendlink" className="text-base">
            Send link
            </Link>
            <Link href="/dashboard/a/admin_pages/register" className="text-base">
              Veiw Questions
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
