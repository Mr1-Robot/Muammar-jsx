// CSS Modules
import classes from "./Skills.module.css";
// Section Header
import SectionHeader from "../ui/SectionHeader";
// Container
import Container from "../ui/Container";
// Next Image
import Image from "next/image";
// Feilds
import Feilds from "./Feilds";
// QR Code Image
import QrCode from "../assets/QrCode";

const Skills = () => {
  return (
    <section id="skills" className={classes.skills}>
      <Container>
        <SectionHeader
          title="skills i've built"
          description="Unveiling My Expertise Through a Comprehensive Exploration of My Skillset, Abilities, and Proficiencies."
        />

        <div className={classes.content}>
          <figure>
            <Image
              src="/images/cpu.svg"
              alt="CPU image shows skills section."
              width={500}
              height={200}
            />
          </figure>

          <Feilds />
        </div>
      </Container>
      <QrCode />
    </section>
  );
};

export default Skills;
