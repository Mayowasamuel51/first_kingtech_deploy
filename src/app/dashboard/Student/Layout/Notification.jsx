import React, { useState } from "react";
import Link from "next/link";


const Profile = ({notif}) => {

  return (
    <>

      {/* Profile dropdown */}

      <div
        className={`absolute top-[5em] md:left-[56em] w-auto z-50 bg-slate-50 shadow-md max-h-max rounded-sm p-10 ${
          notif ? "block" : "hidden"
        }`}
        style={{
          transitionTimingFunction: "ease-in",
          transitionDelay: "1.5s",
          transitionDuration: "2.5s",
        }}
      >

        <div className="mt-3">
            <small className="mb-2 text-sm">Messages</small>
            <hr />
          <ul className="list-none leading-10">
            <li>
              <Link href="/" className="text-[12px]">
                You dont have a message yet...
              </Link>
            </li>
          </ul>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Profile;
