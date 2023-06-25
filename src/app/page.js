import Footer from "./components/Footer";
import Header from "./components/Header";
import NotificationPopup from "./components/Popup";
import About from "./page sections/home/About";
import Apply from "./page sections/home/Apply";
import Banner from "./page sections/home/Banner";
import Benefits from "./page sections/home/Benefits";
import Contact from "./page sections/home/Contact";
import CourseHighlight from "./page sections/home/CourseHighlight";
import Instructors from "./page sections/home/Instructors";
import Kingship from "./page sections/home/Kingship";
import Mentorship from "./page sections/home/Mentorship";
import Testimonials from "./page sections/home/Testimonials";
import Why from "./page sections/home/Why";


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
