// CSS Modules
import classes from "./Feilds.module.css";
// Feild Title
import FeildTitle from "./FeildTitle";
// Skill Card
import SkillCard from "./SkillCard";
// Role Data
import { roleData } from "./roleData";
// Framer Motion
import { motion } from "framer-motion";

const feildVariants = {
  initial: {
    transition: { staggerChildren: 0.2 },
  },
  whileInView: {
    transition: { staggerChildren: 0.2 },
  },
};

const roleVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

const cardsVariants = {
  initial: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
  whileInView: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const Feilds = () => {
  return (
    <motion.div
      className={classes.feilds}
      variants={feildVariants}
      initial="initial"
      whileInView="whileInView"
    >
      {roleData.map((item) => (
        <motion.div
          key={item.id}
          className={classes.role}
          variants={roleVariants}
        >
          <FeildTitle title={item.title} />
          <motion.div className={classes.cards} variants={cardsVariants}>
            {item.cards.map((item) => (
              <SkillCard
                key={item.id}
                title={item.title}
                level={item.level}
                icon={item.icon}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Feilds;
