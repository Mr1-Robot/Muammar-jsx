// CSS Modules
import classes from "./Education.module.css";
// Container
import Container from "../ui/Container";
// SectionHeader
import SectionHeader from "../ui/SectionHeader";
// Education Card
import EducationCard from "./EducationCard";
// QR Code Image
import QrCode from "../assets/QrCode";
// Cards Data
import { CARDS_CONTENT } from "./cardsData";
// Framer Motion
import { motion } from "framer-motion";

const contentVariants = {
  initial: {
    transition: { staggerChildren: 0.2 },
  },
  whileInView: {
    transition: { staggerChildren: 0.2 },
  },
};

const Education = () => {
  return (
    <section id="education" className={classes.education}>
      <Container>
        <SectionHeader
          title="Education and Achievements"
          description="Elevating Expertise Through Rigorous Learning and Achieving a Multitude of Acclaimed Certifications."
        />

        <motion.div
          className={classes.content}
          variants={contentVariants}
          initial="initial"
          whileInView="whileInView"
        >
          {CARDS_CONTENT.map((item) => (
            <EducationCard
              key={item.id}
              href={item.href}
              src={item.src}
              title={item.title}
              description={item.description}
              logo1={item.logo1}
              logo2={item.logo2}
            />
          ))}
        </motion.div>
      </Container>

      <QrCode />
    </section>
  );
};

export default Education;
