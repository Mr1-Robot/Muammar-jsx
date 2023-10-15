// CSS Modules
import classes from "./AboutMe.module.css";
// SectionHeader
import SectionHeader from "../ui/SectionHeader";
// Container
import Container from "../ui/Container";
// QR Code Image
import QrCode from "../assets/QrCode";
// Slider
import Slider from "./Slider";

const AboutMe = () => {
  return (
    <>
      <section id="about-me" className={classes.aboutMe}>
        <Container>
          <SectionHeader
            title="Who Am I?"
            description="An introduction to my background, skills, and aspirations in the world of technology and design."
          />

          <Slider />
        </Container>
      </section>
      <QrCode />
    </>
  );
};

export default AboutMe;
