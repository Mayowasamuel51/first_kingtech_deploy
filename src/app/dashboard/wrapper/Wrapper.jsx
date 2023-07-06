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
  
    return (
      <>
        <Navabr />

        <Component />
      </>
    );
  };

export default Wrapper;
