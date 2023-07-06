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
    onUnauthenticated() {
      // redirect('http://localhost:3000/signin?callbackUrl=/dashboard')
      redirect('https://first-kingtech-deploy.vercel.app/signin?callbackUrl=/dashboard')
    } // to redirect back if user not auth well 
  })
  console.log(session)

  return (
    <div style={{ marginBottom: '12rem' }}>
      <Navabr />
      <Hero name={session?.user?.name} />
      <CoursesInProgress />
      {/* <CoursesScroll/> */}
    </div>
  );
}
