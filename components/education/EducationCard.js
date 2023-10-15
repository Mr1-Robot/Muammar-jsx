// CSS Modules
import classes from "./EducationCard.module.css";
// Next Image
import Image from "next/image";
// LinkArrow
import LinkArrow from "../assets/icons/LinkArrow";
// React Fragment
import { Fragment } from "react";
// Framer Motion
import { motion } from "framer-motion";

const anchorVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const EducationCard = (props) => {
  return (
    <motion.a
      href={props.href}
      target="_blank"
      className={classes.card}
      variants={anchorVariants}
    >
      <figure>
        <Image
          src={props.src}
          alt={props.description}
          width={400}
          height={285}
        />
      </figure>

      <div className={classes.cardContent}>
        <header>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </header>

        <footer className={classes.footer}>
          <div className={classes.logos}>
            {props.logos.map((item, idx) => (
              <Fragment key={idx}>{item}</Fragment>
            ))}
          </div>
          <button>
            <LinkArrow />
          </button>
        </footer>
      </div>
    </motion.a>
  );
};

export default EducationCard;
