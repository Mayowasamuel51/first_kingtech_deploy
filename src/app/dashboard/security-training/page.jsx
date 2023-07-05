"use client"
import Banner from "../../pagesections/security-training.jsx/Banner";
import CourseDetails from "../../pagesections/security-training.jsx/CourseDetails";
import Outline from "../../pagesections/security-training.jsx/Outline";
import Topics from "../../pagesections/security-training.jsx/Topics";

import Wrapper from "../wrapper/Wrapper";
function SecurityTraining() {
  return (
    <main>
      <Banner />
      <div className="py-20">
        <CourseDetails />
        <Topics />
        <Outline />
      </div>
    </main>
  );
}

export default Wrapper(SecurityTraining);
