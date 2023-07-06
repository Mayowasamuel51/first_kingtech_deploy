
import React, { Suspense } from "react";
import CommentComponents from "../components/CommentComponents";
import NetworkError from "@/app/NetworkError";
import Admi_Layout from "./Admi_Layout";

async function fetchcomment() {
    const response = await fetch('https://first-kingtech-deploy.vercel.app/api/Admins/register', {
       next:{ revalidate: 10 } 
    })
    // const response = await fetch('http://localhost:3000/api/Admins/comments', {
    //     // cache: 'no-store'
    //     next:{ revalidate: 10 } 
    // })

    try {
        if (!response.ok) {
            if (response.status === 404) {
                // return <NetworkError />
                throw new Error('Resource not found');
            } else if (response.status === 500) {
                // return <NetworkError />
                throw new Error('Internal server error');
            } else {
                // return <NetworkError />
                throw new Error('Unknown server error');
            }
        }
        const data = await response.json()
        return data.data
    } catch (err) {
        return <NetworkError />
    }

    // const data = await response.json()
    // return data.data
}
async function CommentsUser() {
    const comments = await fetchcomment()
    return (
        <div className="container mx-auto w-full max-w-full">
            <div className="w-full relative top-[4em] p-4">
                <h2 className="text-2xl text-orange-500 px-8">Comment From  Students</h2>
            </div>
            <div className="mt-3 text-center">
                <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
                <CommentComponents comments={comments}/>
                </Suspense>
            </div>
        </div>
    )
}

export default CommentsUser