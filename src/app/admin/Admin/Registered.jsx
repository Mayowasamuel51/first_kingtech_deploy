import React, { Suspense, cache } from "react";
import Admi_Layout from "./Admi_Layout";
import RegisterStudent from "../components/RegisterStudent";
import NetworkError from "@/app/NetworkError";
async function fetchregister() {
  const response = await fetch('https://kingshiptechnologies.com/api/Admins/register', {
    next:{ revalidate: 20 } 
  })
  // const response = await fetch('http://localhost:3000/api/Admins/register', {
  //   // cache: 'no-store'
  //   next:{ revalidate: 20 } 
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
const Registered = async () => {
  const register = await fetchregister()
  return (
    <>
      <div className="container mx-auto w-full max-w-full">
        <div className="w-full relative top-[4em] p-4">
          <h2 className="text-2xl text-orange-500 px-8">Registered Students</h2>
        </div>
        <div className="mt-3">
          <Suspense fallback={<h1 className="text-3xl font-semibold text-center ">LOADING.....</h1>}>
            <RegisterStudent students={register} />
          </Suspense>
        </div>
      </div>

    </>
  );
};

export default Admi_Layout(Registered);
