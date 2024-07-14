import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import CustomFooter from "./components/footer/CustomFooter";
import CustomHeader from "./components/header/CustomHeader";
import Projects from "./components/projects/Projects";

export default function Home() {
    return (
        <>
            <CustomHeader />
            <main>
                <AboutMe />
                <Projects />
                <Contact />
            </main>
            <CustomFooter />
        </>
    );
}
