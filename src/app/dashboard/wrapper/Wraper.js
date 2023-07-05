"use client";
<<<<<<< HEAD
import React, { Suspense } from "react";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Error from "../error";
import Loading from "../loading";
import ErrorBoundary from '../../ErrorBoundary'
import Provider from "@/app/SessionProvider";
const  SectionWrapper = (Component)=> 
    // const { data: session } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         redirect('http://localhost:3000/signin?callbackUrl=/dashboard')
    //     }
    // })
    // console.log(session)
    function Wrap() {
        const { data: session } = useSession({
          required: true,
          onUnauthenticated() {
            redirect("http://localhost:3000/signin?callbackUrl=/dashboard");
          },
        });
    return (
        <>
            <Provider>
                <ErrorBoundary fallback={<Error />}>
                    <Suspense fallback={<Loading />}>
                        <Navabr />
                        <Hero name={session?.user?.name} />
                        <Component />
                    </Suspense>
                </ErrorBoundary>
            </Provider>
        </>
=======
import React from "react";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SectionWrapper = (Component) =>
  function Wrap() {
    const { data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("http://localhost:3000/signin?callbackUrl=/dashboard");
      },
    });
    console.log(session);
    return (
      <>
        <Navabr />
        <Hero name={session?.user?.name} />
        <Component />
      </>
>>>>>>> b684650a572364f384ea1d8d0f8301a87da0e49e
    );
  };

export default SectionWrapper;
