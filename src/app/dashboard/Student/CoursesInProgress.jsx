'use client'
import access from "../../assets/access_control.png"


import React, { useEffect } from 'react'
import Image from 'next/image'
import { courseInProgress } from '../store'
// import styles from './styles.module.css';
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
import Home from '../page';
import { useRouter } from 'next/navigation';
import Link from "next/link"
const CoursesInProgress = () => {
  const router = useRouter()
  const { data: session } = useSession({
    required:true
  })
  console.log(session)
  // if (!session) {
  //   return <  Home />;
  // }
  return (
    <div className='container-fluid mx-auto p-5 mt-10 w-full'>

      <div className="mt-3 text-center">
        {/* <h1 className="text-xl text-orange-500 mx-5 capitalize">{session?.user?.email}</h1> */}
      </div>
      <section className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-center items-center p-4 overflow-auto max-w-full mx-auto relative top-[3.54em] gap-[2.34rem]">
  <div className="p-5 shadow-lg w-full h-full rounded-md text-center">
    <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
            <Image src={access} alt="" width={200} height={200} />
            
    </div>
    <h2 className="text-[0.99em] text-center  font-bold">
     Cybersecurity
    </h2>
    <div className="px-6 mt-8 leading-[1.3rem]">
            {/* <input type="range" name="" id="" value="12" className="bg-slate-300 w-full" /> */}
            <div className='md:flex md:flex-row md:items-center md:gap-x-5 text-center'>
                        <Link
                            href="/register"
                            className=' border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'
                        >
                          Get Course
                        </Link>
            </div>
            <h2 className="text-[0.99em] text-center  font-bold pt-4">
    link to class 
    </h2>
    </div>
  </div>

  <div className="p-5 shadow-lg w-full h-full rounded-md">
    <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
      <Image src={access} alt="" width={200} height={200} />
    </div>
    <h2 className="text-[0.99em] text-center font-bold">
    Security plus training
    </h2>
    <div className="px-6 mt-8 leading-[1.3rem]">
    <div className='md:flex md:flex-row md:items-center md:gap-x-5'>
    <Link
                            href="/register"
                            className=' border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'
                        >
                Get Course
                </Link>
            </div>
            <h2 className="text-[0.99em] text-center  font-bold pt-4">
    link to class 
    </h2>
    </div>
  </div>

  <div className="p-5 shadow-lg w-full h-full rounded-md">
    <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
      <Image src={access} alt="" width={200} height={200} />
    </div>
    <h2 className="text-[0.99em] text-center font-bold">
    MENTORSHIP 
    </h2>
    <div className="px-6 mt-8 leading-[1.3rem]">
    <div className='md:flex md:flex-row md:items-center md:gap-x-5'>
                        <Link
                            href="/register"
                            className=' border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'
                        >
                          Get Course
                        </Link>
            </div>
            <h2 className="text-[0.99em] text-center  font-bold pt-4">
    link to class 
    </h2>
    </div>
  </div>
</section>

    </div>
  )
}

export default CoursesInProgress



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