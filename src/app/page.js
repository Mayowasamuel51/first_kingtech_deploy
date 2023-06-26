import Footer from "./components/Footer";
import Header from "./components/Header";
import NotificationPopup from "./components/Popup";
import About from "./pagesections/home/About";
import Apply from "./pagesections/home/Apply";
import Banner from "./pagesections/home/Banner";
import Benefits from "./pagesections/home/Benefits";
import Contact from "./pagesections/home/Contact";
import CourseHighlight from "./pagesections/home/CourseHighlight";
import Instructors from "./pagesections/home/Instructors";
import Kingship from "./pagesections/home/Kingship";
import Mentorship from "./pagesections/home/Mentorship";
import Testimonials from "./pagesections/home/Testimonials";
import Why from "./pagesections/home/Why";


export default function Home() {
  return (
    <main className="homeBody">
      <Header/>
      <NotificationPopup />
      <Banner />
      <Why />
      <CourseHighlight />
      <Mentorship />
      <Benefits />
      <Kingship />
      <Testimonials />
      <Instructors />
      <Apply />
      <About />
      <Contact />
      <Footer/>
    </main>
  )
}
