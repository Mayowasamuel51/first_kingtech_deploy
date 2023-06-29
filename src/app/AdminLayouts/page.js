'use client'
import Navabr from "./Student/Layout/Navabr";
import Hero from "./Student/Hero";
import CoursesScroll from "./Student/CoursesScroll";
import CoursesInProgress from "./Student/CoursesInProgress";
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation';
// we use a props to infomations 
export default function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated(){
      redirect('https://first-kingtech-deploy.vercel.app/signin?callbackUrl=/AdminLayouts')
    } // to redirect back if user not auth well 
  })
  console.log(session)
  
  return (
    <>
      <Navabr  />
      <Hero name={session?.user?.email}  />
      <CoursesInProgress />
      {/* <CoursesScroll/> */}
    </>
  );
}
