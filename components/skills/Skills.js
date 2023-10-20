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
// useContext Hook
import { useContext } from "react";
// Mode Context
import { ModeContext } from "@/context/ThemeContext";

const Skills = () => {
  const ctx = useContext(ModeContext);

  const src = ctx.mode === "dark" ? "/images/cpu.svg" : "/images/cpu-light.svg";

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
              src={src}
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
