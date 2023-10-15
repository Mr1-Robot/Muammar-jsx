// CSS Modules
import classes from "./SecondaryButton.module.css";
// Framer Motion
import { motion } from "framer-motion";

const SecondaryButton = (props) => {
  if (props.link) {
    return (
      <motion.a
        href={props.link}
        target="_blank"
        className={classes.button}
        whileTap={{
          scale: 0.95,
          transition: { type: "spring", stiffness: 400 },
        }}
        whileHover={{ scale: 0.99 }}
      >
        {props.children}
      </motion.a>
    );
  }
  return <button className={classes.button}>{props.children}</button>;
};

export default SecondaryButton;
