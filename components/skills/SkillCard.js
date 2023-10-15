// CSS Modules
import classes from "./SkillCard.module.css";
// Framer Motion
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SkillCard = (props) => {
  return (
    <motion.div className={classes.card} variants={cardVariants}>
      <div className={classes.cardContent}>
        <header>
          <h3>{props.title}</h3>
          <p>{props.level}</p>
        </header>
        {props.icon}
      </div>
    </motion.div>
  );
};

export default SkillCard;
