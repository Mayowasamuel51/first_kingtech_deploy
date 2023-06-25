import Navabr from "./Student/Layout/Navabr";
import Hero from "./Student/Hero";
import CoursesScroll from "./Student/CoursesScroll";
import CoursesInProgress from "./Student/CoursesInProgress";

export default function Home() {
  return (
    <>
      <Navabr />
      <Hero/>
      <CoursesInProgress/>
      <CoursesScroll/>
    </>
  );
}
