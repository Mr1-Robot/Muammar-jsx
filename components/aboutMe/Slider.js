// CSS Modules
import classes from "./Slider.module.css";
// Next Image
import Image from "next/image";
// Message Icon
import Message from "../assets/icons/Message";
// ChevronRight Icon
import ChevronRight from "../assets/icons/ChevronRight";
// ChevronLeft Icon
import ChevronLeft from "../assets/icons/ChevronLeft";
// Square Icon
import Square from "../assets/icons/Square";
// Buzzle Icon
import Buzzle from "../assets/icons/Buzzle";
// Framer Motion
import { motion } from "framer-motion";
// useState
import { useState } from "react";

const CONTENT = [
  {
    id: 0,
    image: "/images/me-0.svg",
    icon: <Message />,
    title:
      "I am Muammar Mohammed Abdullah, a Senior Computer Science - Information System Student.",
    list: [
      "- University of Technology",
      "- Computer Science - Information System",
      "- Fourth Stage",
    ],
  },

  {
    id: 1,
    image: "/images/me-1.svg",
    icon: <Square />,
    title:
      "I specialize in front-end web development, UI/UX design, and social media buying.",
    list: [
      "- Front-End Development",
      "- UI/UX Design",
      "- Social Media Buying",
    ],
  },

  {
    id: 2,
    image: "/images/me-2.svg",
    icon: <Buzzle />,
    title:
      "At the age of 22, I am committed to continuous learning and growth in the ever-evolving landscape of technology and design.",
    list: ["- Age 22 yrs", "- Learning", "- Technologies & Design"],
  },
];

const LIST_VARIANTS = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const ITEM_VARIANTS = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const Slider = () => {
  const [index, setIndex] = useState(0);

  let content = CONTENT[index];
  function nextHandler() {
    setIndex(index + 1);
  }

  function prevHandler() {
    setIndex(index - 1);
  }

  const styles = {
    justifyContent: index > 0 && index < 3 ? "space-between" : "flex-end",
  };

  return (
    <section className={classes.slider}>
      <motion.figure
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            delay: 0.2,
            duration: 0.3,
            stiffness: 80,
          },
        }}
      >
        <Image
          src={content.image}
          width="440"
          height="580"
          alt="Muammar Mohammed Abdullah Personal Photo."
        />
      </motion.figure>
      <div className={classes.content}>
        <header>
          {content.icon}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.4 },
            }}
          >
            {content.title}
          </motion.h1>
        </header>

        <motion.ul
          variants={LIST_VARIANTS}
          initial="initial"
          whileInView="animate"
        >
          {content.list.map((item, idx) => (
            <motion.li key={idx} variants={ITEM_VARIANTS}>
              <p>{item}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className={classes.button} style={styles}>
          {index > 0 && (
            <button onClick={prevHandler} className={classes.prev}>
              <ChevronLeft />
            </button>
          )}

          {index < 2 && (
            <button onClick={nextHandler} className={classes.next}>
              <ChevronRight />
            </button>
          )}
        </div>

        <div className={classes.indicator}>
          <button
            onClick={() => setIndex(0)}
            className={index === 0 ? classes.active : ""}
          />
          <button
            onClick={() => setIndex(1)}
            className={index === 1 ? classes.active : ""}
          />
          <button
            onClick={() => setIndex(2)}
            className={index === 2 ? classes.active : ""}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
