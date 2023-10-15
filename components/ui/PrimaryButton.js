// CSS Modules
import classes from "./PrimaryButton.module.css";
// Frame Motion
import { motion } from "framer-motion";
// Link Scroll
import { Link } from "react-scroll";

const PrimaryButton = (props) => {
  if (props.link) {
    return (
      <motion.div
        whileTap={{
          scale: 0.95,
          transition: { type: "spring", stiffness: 400 },
        }}
        whileHover={{ scale: 0.99 }}
      >
        <Link
          to={props.link}
          duration={300}
          smooth={true}
          className={classes.button}
        >
          {props.children}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button
      className={classes.button}
      whileTap={{
        scale: 0.95,
        transition: { type: "spring", stiffness: 400 },
      }}
      whileHover={{ scale: 0.99 }}
    >
      {props.children}
    </motion.button>
  );
};

export default PrimaryButton;
