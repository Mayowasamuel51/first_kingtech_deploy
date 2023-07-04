'use client';
import React from "react";
import Hero from "../Student/Hero";
import Navabr from "../Student/Layout/Navabr";
import { useSession } from 'next-auth/react';
import { redirect} from 'next/navigation';

function SectionWrapper(Component) {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('http://localhost:3000/signin?callbackUrl=/dashboard')
        } 
    })
    console.log(session)
    return (
        <>
            <Navabr />
            <Hero name={session?.user?.name} />
            <Component />
        </>
    );
};
export default SectionWrapper;