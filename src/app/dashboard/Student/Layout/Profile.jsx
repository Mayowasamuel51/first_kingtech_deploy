"use client";
import React, { useState, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import profile from "../../../assets/person_1.jpg";
import Link from "next/link";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  const handleMenu = () => {
    setShow((prev) => !prev);
  };
  // console.log(session)

  const ref = useRef();

  const clickMenu = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    },
    [show]
  );

  useEffect(() => {
    document.addEventListener("click", clickMenu);
  }, [clickMenu]);

  return (
    <>
      <div
        className={`px-2 inline-block relative cursor-pointer`}
        onClick={handleMenu}
        ref={ref}
      >
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={500}
            height={500}
            className="rounded-full md:w-[100px] md:h-[50px] w-[80px] h-[80px] "
          />
        ) : (
          <UserCircleIcon className="md:w-[100px] md:h-[50px] w-[80px] h-[80px]" />
        )}
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
          transitionProperty: "all",
        }}
      >
        <div className="flex flex-1 justify-center  align-baseline gap-5 items-center mb-4 p-2">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              className="rounded-full relative w-[60px] h-[60px]"
              width={80}
              height={80}
            />
          ) : (
            <UserCircleIcon className="w-20 h-20" />
          )}
          <Link className="flex flex-col leading-6 items-center" href="/">
            <span className="text-[15px] font-medium">
              {session?.user?.name}
            </span>
            <small className="text-[10px]">{session?.user?.email}</small>
          </Link>
        </div>

        <hr />

        <div className="mt-3 p-1 md:hidden block">
          <div className="flex flex-1 justify-center items-center align-baseline mx-auto gap-0 ">
            <button className="text-sm border-0 bg-black text-white p-2">
              <FaSearch />
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
              <button
                onClick={() =>
                  signOut({ callbackUrl: "https://first-kingtech-deploy.vercel.app" })
                  // signOut({ callbackUrl: "http://localhost:3000" })
                }
                className="text-[12px]"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
