"use client";
import React from "react";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Error from "../error";
import Loading from "../loading";
import ErrorBoundary from '../../ErrorBoundary'
import Provider from "@/app/SessionProvider";
const Wrapper = (Component) =>
  function Wrap() {
    const { data: session } = useSession({
      required: true,
      onUnauthenticated() {
        // redirect("http://localhost:3000/signin?callbackUrl=/dashboard");
        redirect('https://first-kingtech-deploy.vercel.app/signin?callbackUrl=/dashboard')
      },
    });

    return (
      <>
        <Provider>
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
            <Navabr />
            <Component />
          </Suspense>
        </ErrorBoundary>
      </Provider >
      </>
    );
  };

export default Wrapper;
