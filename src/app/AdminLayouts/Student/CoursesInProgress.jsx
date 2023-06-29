'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { courseInProgress } from '../store'
// import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
import Home from '../page';
import { useRouter } from 'next/navigation';
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

      <div className="mt-3">
        {/* <h1 className="text-xl text-orange-500 mx-5 capitalize">{session?.user?.email}</h1> */}

        <button onClick={()=>signOut({callbackUrl:'http://localhost:3000'})}  className="text-[12px]">
                Logout
              </button>
      </div>

      <section className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-center items-center align-middle p-4 overflow-auto max-w-full mx-auto relative top-[3.54em] gap-[2.34rem]">
          {courseInProgress.map((course) => {
            return (
              <>
                <div className="p-5 shadow-lg w-full h-full rounded-md">
                  <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
                    <Image src={course.img} alt="" width={200} height={200} />
                  </div>

                  <h2 className="text-[0.99em] text-center">
                    {course.course}
                  </h2>

                  <div className='px-6 mt-8 leading-[1.3rem]'>
                    {/* <RangeSlider min={0} max={100} step={1} defaultValue={course.range} className='bg-slate-500 w-full ' value={course.range}/> */}
                     <input type="range" name="" id="" value={course.range} className='bg-slate-300 w-full'/>
                  </div>
                </div>
              </>
            );
          })}
        </section>
    </div>
  )
}

export default CoursesInProgress
