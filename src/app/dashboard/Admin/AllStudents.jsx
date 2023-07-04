import React, { Suspense } from "react";
import FormContact from "../components/FormContact";
async function fetchContact() {
  const response = await fetch('https://first-kingtech-deploy.vercel.app/api/Admins/contact', {
    cache:'no-store'
  })
  // const response = await fetch('http://localhost:3000/api/Admins/contact', {
  //   cache:'no-store'
  // })
  const data = await response.json()
  return data.data
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
          <Suspense fallback={<h1 className="text-3xl font-semibold text-center">LOADING.....</h1>}>
            <FormContact contact={contactForm} />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default AllStudents;
