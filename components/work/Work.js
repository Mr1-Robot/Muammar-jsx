// CSS Moduels
import classes from "./Work.module.css";
// Container
import Container from "../ui/Container";
// SectionHeader
import SectionHeader from "../ui/SectionHeader";
// Next Image
import Image from "next/image";
// LinkArrow Icon
import LinkArrow from "../assets/icons/LinkArrow";
// QR Code Image
import QrCode from "../assets/QrCode";
// Galleries
import { GALLERY, HORIZANTAL_GALLERY } from "./galleryData";
// Framer Motion
import { motion } from "framer-motion";

const contentVariants = {
  initial: {
    transition: { staggerChildren: 0.3 },
  },
  whileInView: {
    transition: { staggerChildren: 0.3 },
  },
};

const imgContVariants = {
  initial: {
    opacity: 0,
    transition: { staggerChildren: 0.2 },
  },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const contentAnchorVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

const slidesVariants = {
  initial: {
    transition: { staggerChildren: 0.1 },
  },

  whileInView: {
    transition: { staggerChildren: 0.1 },
  },
};

const figureVariants = {
  initial: {
    opacity: 0,
    transitiin: { staggerChildren: 0.2 },
  },

  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const anchorVariants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const Work = () => {
  return (
    <section id="work" className={classes.work}>
      <Container>
        <SectionHeader
          title="Work I've Done"
          description="Explore an Extensive Portfolio Highlighting My Diverse Range of Projects, Demonstrated Expertise, and Accomplishments in the Field."
        />
        <div className={classes.imgsContainer}>
          <motion.div
            className={classes.content}
            variants={contentVariants}
            initial="initial"
            whileInView="whileInView"
          >
            {GALLERY.map((item) => (
              <motion.div
                key={item.id}
                className={classes.imgCont}
                variants={imgContVariants}
              >
                {item.images.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    variants={contentAnchorVariants}
                  >
                    <Image
                      src={item.src}
                      width={550}
                      height={350}
                      alt={item.alt}
                    />
                    <div className={classes.btn}>
                      <button>
                        {item.title}
                        <div className={classes.line} />
                        <span>
                          <LinkArrow />
                        </span>
                      </button>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={classes.slides}
            variants={slidesVariants}
            initial="initial"
            whileInView="whileInView"
          >
            {HORIZANTAL_GALLERY.map((item) => (
              <motion.figure
                key={item.id}
                style={{ margin: item.margin }}
                variants={figureVariants}
              >
                {item.images.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    variants={anchorVariants}
                  >
                    <Image
                      src={item.src}
                      width={530}
                      height={270}
                      alt={item.alt}
                    />

                    <div className={classes.btn}>
                      <button>
                        {item.title} <div className={classes.line} />
                        <span>
                          <LinkArrow />
                        </span>
                      </button>
                    </div>
                  </motion.a>
                ))}
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </Container>
      <QrCode />
    </section>
  );
};

export default Work;
