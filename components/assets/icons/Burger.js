// CSS Modules
import classes from "./Burger.module.css";
// Framer Motion
import { motion } from "framer-motion";

const Burger = () => {
  return (
    <div className={classes.burger}>
      <motion.span
        initial={{ x: 1, y: 10, rotate: -60 }}
        animate={{
          x: 0,
          y: 0,
          rotate: 0,
          transition: { type: "spring", stiffness: 150 },
        }}
      />
      <motion.span
        initial={{ x: 1, y: 10, rotate: 60 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
      />
    </div>
  );
};

export default Burger;
