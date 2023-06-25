import Experts from "../components/Experts";
import Contact from "../page sections/home/Contact";
import Banner from "../page sections/security-training.jsx/Banner";
import CourseDetails from "../page sections/security-training.jsx/CourseDetails";
import Eligibility from "../page sections/security-training.jsx/Eligibility";
import Outline from "../page sections/security-training.jsx/Outline";
import Topics from "../page sections/security-training.jsx/Topics";
import SectionWrapper from "../components/SectionWrapper";
function  SecurityTraining() {
    return (
        <main>
            <Banner />
            <div className="py-20">
                <CourseDetails />
                <Topics />
                <Outline />
                <Eligibility />
                <Experts />
                <Contact />
            </div>
        </main>
    )
}

export default  SectionWrapper(SecurityTraining)