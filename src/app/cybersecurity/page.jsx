import Experts from "../components/Experts"; 
import SectionWrapper from "../components/SectionWrapper";
import Banner from "../page sections/cybersecurity/Banner";
import CourseDetails from "../page sections/cybersecurity/CourseDetails";
import Eligibility from "../page sections/cybersecurity/Eligibility";
import Outline from "../page sections/cybersecurity/Outline";
import Topics from "../page sections/cybersecurity/Topics";
import Contact from "../page sections/home/Contact";
function Cybersecurity() {
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


export default  SectionWrapper(Cybersecurity)