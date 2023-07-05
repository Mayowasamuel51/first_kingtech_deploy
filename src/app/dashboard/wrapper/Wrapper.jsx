"use client";
import React from "react";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Wrapper = (Component) =>
  function Wrap() {
    const { data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("http://localhost:3000/signin?callbackUrl=/dashboard");
      },
    });
<<<<<<< HEAD
  
=======
    console.log(session);
>>>>>>> b684650a572364f384ea1d8d0f8301a87da0e49e
    return (
      <>
        <Navabr />

        <Component />
      </>
    );
  };

export default Wrapper;
