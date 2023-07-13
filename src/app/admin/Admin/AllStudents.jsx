import React, { Suspense } from "react";
import FormContact from "../components/FormContact";
import ErrorBoundary from "@/app/ErrorBoundary";
import Error from '../../dashboard/error'
import NetworkError from "@/app/NetworkError";
async function fetchContact() {
  const response = await fetch("https://kingshiptechnologies.com/api/Admins/contact", {
    cache:"no-store"
  })
  // const response = await fetch('http://localhost:3000/api/Admins/contact', {
  //   // cache: 'no-store'
  //   next:{ revalidate: 20 } 
  // })

  try {
    if (!response.ok) {
      if (response.status === 404) {
        return <NetworkError />
        // throw new Error('Resource not found');
      } else if (response.status === 500) {
        return <NetworkError />
        // throw new Error('Internal server error');
      } else {
        return <NetworkError />
        // throw new Error('Unknown server error');
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

const AllStudents = async () => {
  const contactForm = await fetchContact()

  return (
    <>
      <div className="container mx-auto w-full max-w-full">
        <div className="w-full relative top-[4em] p-4">
          <h2 className="text-2xl text-orange-500 px-8">From Contact Form</h2>
        </div>
        <div className="mt-3">
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<h1 className="text-3xl font-semibold text-center">LOADING.....</h1>}>
              <FormContact contact={contactForm} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};
export default AllStudents;
