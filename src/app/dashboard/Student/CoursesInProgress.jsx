"use client";
import access from "../../assets/access_control.png";

import React, { useEffect } from "react";
import Image from "next/image";
import { courseInProgress } from "../store";
// import styles from './styles.module.css';
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Home from "../page";
import { useRouter } from "next/navigation";
import Link from "next/link";
const CoursesInProgress = () => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
  });
  console.log(session);
  // if (!session) {
  //   return <  Home />;
  // }
  const courses = [
    {
      id: 1,
      title: "cybersecurity",
    },
    {
      id: 2,
      title: "security-training",
    },
    {
      id: 3,
      title: "mentorship",
    },
  ];
  return (
    <div className="container-fluid mx-auto p-5 mt-10 w-full">
      <div className="mt-3 text-center">
        {/* <h1 className="text-xl text-orange-500 mx-5 capitalize">{session?.user?.email}</h1> */}
      </div>
      <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center p-4 overflow-auto max-w-screen-lg mx-auto relative top-[3.54em] gap-[2.34rem]">
        {courses.map(({ id, title }) => {
          return (
            <div
              key={id}
              className="p-5 shadow-lg w-full h-full rounded-md flex flex-col items-center"
            >
              <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
                <Image src={access} alt="" width={200} height={200} />
              </div>
              <h2 className=" text-xl font-semibold capitalize">{title}</h2>
              <div className="px-6 mt-8 leading-[1.3rem]">
                {/* <input type="range" name="" id="" value="12" className="bg-slate-300 w-full" /> */}
                <div className="md:flex md:flex-row md:items-center md:gap-x-5 text-center">
                  <Link
                    href={`#`}
                    className=" border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white text-sm hover:bg-black hover:border-black hover:shadow-md"
                  >
                    Get Course
                  </Link>
                </div>
                <div className=" mt-4">
                  <Link href="#" className=" font-medium">
                    Link to class
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CoursesInProgress;

// {courseInProgress.map((course) => {
//   return (
//     <>
//       <div className="p-5 shadow-lg w-full h-full rounded-md">
//         <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
//           <Image src={course.img} alt="" width={200} height={200} />
//         </div>

//         <h2 className="text-[0.99em] text-center">
//           {course.course}
//         </h2>

//         <div className='px-6 mt-8 leading-[1.3rem]'>

//            <input type="range" name="" id="" value={course.range} className='bg-slate-300 w-full'/>
//         </div>
//       </div>
//     </>
//   );
// })}
