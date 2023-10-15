// Next Head
import Head from "next/head";
// Inter Font
import { Inter } from "next/font/google";
// Main Header
import MainHeader from "@/components/header/MainHeader";
// Hero
import Hero from "@/components/hero/Hero";
// About Me
import AboutMe from "@/components/aboutMe/AboutMe";
// Experience
import Experience from "@/components/experience/Experience";
// Skills
import Skills from "@/components/skills/Skills";
// Work
import Work from "@/components/work/Work";
// Education
import Education from "@/components/education/Education";
// Footer
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>Muammar.jsx</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="I'm Muammar M. Abdullah, a Senior Computer Science - Information System student in the University of Technology. Am a talented front-end web developer, UI/UX Designer, and Social Media Buyer. Located in Baghdad, Iraq."
        />
        <meta
          name="keywords"
          content="Muammar M. Abdullah, Front-End Development, UI/UX Design, Social Media Buying, University of Technology, mo3mer1, Mr1-Robot"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Muammar.jsx" />
        <link rel="icon" href="favicon.svg" />
      </Head>

      <main className={inter.className}>
        <MainHeader />
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Work />
        <Education />
        <Footer />
      </main>
    </>
  );
};

export default Home;
