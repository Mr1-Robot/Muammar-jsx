// CSS Modules
import classes from "./Experience.module.css";
// Section Header
import SectionHeader from "../ui/SectionHeader";
// Container
import Container from "../ui/Container";
// Cards
import Cards from "./Cards";
// QR Code Image
import QrCode from "../assets/QrCode";
// Framer Motion
import { motion } from "framer-motion";

const CARDS_VARIANTS = {
  initial: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  animate: { transition: { staggerChildren: 0.2 } },
};
const Experience = () => {
  return (
    <>
      <section id="experience" className={classes.experience}>
        <Container>
          <SectionHeader
            title="What Experience Do I Have?"
            description="A Journey through my professional endeavors, and achievements in the world of technology and design."
          />
          <motion.div
            className={classes.cards}
            variants={CARDS_VARIANTS}
            initial="initial"
            whileInView="animate"
          >
            <Cards />
          </motion.div>
        </Container>
      </section>
      <QrCode />
    </>
  );
};

export default Experience;
