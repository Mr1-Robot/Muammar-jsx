// CSS Modules
import classes from "./Cards.module.css";
// Next Image
import Image from "next/image";
// Primary Button
import PrimaryButton from "../ui/PrimaryButton";
// Framer Motion
import { motion } from "framer-motion";
import { useEffect } from "react";

const CARDS_CONTENT = [
  {
    id: 0,
    image: "/images/front-end.svg",
    title: "Front-End Development",
    description:
      "I have 2+ years experience in front-end web development, 1 year of experience in React JS library, and less than a year in Next JS.",
    href: "https://github.com/Mr1-Robot/",
  },

  {
    id: 1,
    image: "/images/ui-ux.svg",
    title: "UI/UX Designer",
    description:
      "I have 1+ year experience in UI/UX Design with Figma. All made with love and rely on UI/UX principles.",
    href: "https://behance.net/muammar-jsx",
  },

  {
    id: 2,
    image: "/images/social-media.svg",
    title: "Social Media Buying",
    description:
      "I have 1+ year experience in Social Media Buying. I've made a variety of successful campaigns on Meta, and Instagram platforms.",
    href: "https://meta.com/",
  },
];

const CARD_VARIANTS = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Cards = (props) => {
  return (
    <>
      {CARDS_CONTENT.map((item) => (
        <motion.a
          href={item.href}
          target="_blank"
          key={item.id}
          className={classes.card}
          variants={CARD_VARIANTS}
          onClick={props.showModal}
        >
          <figure>
            <Image
              src={item.image}
              width={400}
              height={200}
              alt={item.title + " Image."}
              priority={true}
            />
          </figure>

          <header className={classes.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </header>

          <div className={classes.actions}>
            <PrimaryButton>See Projects</PrimaryButton>
          </div>
        </motion.a>
      ))}
    </>
  );
};

export default Cards;
