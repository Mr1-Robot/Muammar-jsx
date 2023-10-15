// CSS Modules
import classes from "./Close.module.css";
// Framer Motion
import { motion } from "framer-motion";

const Close = () => {
  return (
    <div className={classes.close}>
      <motion.span
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={{
          x: 1,
          y: 1,
          rotate: -45,
          transition: { type: "spring", stiffness: 250 },
        }}
      />
      <motion.span
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={{
          x: 1,
          y: -1,
          rotate: 45,
          transition: { type: "spring", stiffness: 250 },
        }}
      />
    </div>
  );
};

export default Close;
