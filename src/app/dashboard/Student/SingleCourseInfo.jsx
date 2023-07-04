"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { courses } from "../store";
import Image from "next/image";
import { FaStar, FaHeart } from "react-icons/fa";
import Link from "next/link";

const SingleCourseInfo = () => {
  const [fav, setFav] = useState(courses.map((course) => course.fav));
  const params = useParams();
  const id = params.id;

  const handleFav = () => {
    setFav(prev => !prev)
  }

  return (
    <>
      <div className="container-fluid mx-auto bg-slate-50 relative top-[6rem]">
        {courses.map((course) =>
          course.id == id ? (
            <>
              <div className="grid grid-cols-3 justify-center items-center gap-8 px-10 py-6 ml-[3em] m-auto">
                <div
                  className="p-6 shadow-lg w-full h-full rounded-md"
                  key={course.id}
                >
                  <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
                    <Image src={course.img} alt="" width={200} height={200} />
                  </div>

                  <h2 className="text-[0.99em] text-center">{course.course}</h2>

                  <div className="flex flex-1 justify-center items-center flex-grow gap-1 p-1">
                    <small className="text-sm">{course.rate}</small>
                    <FaStar className="text-xs text-yellow-400" />
                    <FaStar className="text-xs text-yellow-400" />
                    <FaStar className="text-xs text-yellow-400" />
                    <FaStar className="text-xs text-yellow-400" />
                    <FaStar className="text-xs" />
                  </div>
                  <div className="p-3 mt-6 text-center">
                    <Link href="/" className="bg-black text-white px-5 py-2">
                      Buy Course
                    </Link>
                  </div>
                </div>

                <div className="mx-auto flex flex-1 flex-col items-baseline align-middle justify-center gap-10 px-8 py-3">
                  <div className="mb-2 leading-normal">
                    <h2 className="text-lg">Description</h2>
                    <span className="block mt-2 text-slate-500">
                      {course.description}
                    </span>
                  </div>
                  <div className="mb-2 leading-normal">
                    <h2 className="text-lg">Prize</h2>
                    <span className="block mt-2 text-slate-500">
                      ${course.prize}
                    </span>
                  </div>
                  <div className="mb-2 leading-normal">
                    <h2 className="text-lg">Duration</h2>
                    <span className="block mt-2 text-slate-500">
                      {course.duration}
                    </span>
                  </div>
                  <div className="mb-2 leading-normal">
                    <button className="text-lg" onClick={handleFav}>
                      <FaHeart className={fav ? 'text-slate-400': 'text-red-600'} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default SingleCourseInfo;
