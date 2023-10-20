// CSS Modules
import classes from "./MainHeader.module.css";
// Logo
import Logo from "../assets/Logo";
// LogoLight
import LogoLight from "../assets/LogoLight";
// Sun Icon
import Sun from "../assets/icons/Sun";
// Moon Icon
import Moon from "../assets/icons/Moon";
// Burger Icon
import Burger from "../assets/icons/Burger";
// Close Icon
import Close from "../assets/icons/Close";
// LinkedIn Icon
import LinkedIn from "../assets/icons/LinkedIn";
// GitHub Icon
import GitHub from "../assets/icons/GitHub";
// Behance Icon
import Behance from "../assets/icons/Behance";
// Instagram Icon
import Instagram from "../assets/icons/Instagram";
// Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// useState
import { useContext, useState } from "react";
// React Scroll
import { Link } from "react-scroll";
// El_Messiri Font
import { El_Messiri } from "next/font/google";
import { ModeContext } from "@/context/ThemeContext";

const elmessiri = El_Messiri({ subsets: ["latin"] });

const NAV_LINKS = [
  { id: 0, title: "Home", link: "home" },
  { id: 1, title: "About Me", link: "about-me" },
  { id: 2, title: "Experience", link: "experience" },
  { id: 3, title: "Skills", link: "skills" },
  { id: 4, title: "Work", link: "work" },
  { id: 5, title: "Education", link: "education" },
  { id: 6, title: "Contact", link: "contact" },
];

const navVariants = {
  initial: {
    scaleY: 0,
    width: "95%",
    borderRadius: "0 0 20% 100%",
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
    width: "100%",
    borderRadius: 0,
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15,
    },
  },
};

const navChildrenVariants = {
  initial: {
    y: "-100vh",
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 50,
    },
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.5,
    },
  },
};

const navParentVariants = {
  initial: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.02,
      staggerChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const navSocialParentVariants = {
  initial: { transition: { staggerChildren: 0.05 } },
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
};

const navSocialIconVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const SOCIAL_ARRAY = [
  {
    id: 0,
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/in/muammar-jsx/",
  },
  { id: 1, icon: <GitHub />, href: "https://github.com/Mr1-Robot/" },
  { id: 2, icon: <Behance />, href: "https://www.behance.net/muammar-jsx" },
  { id: 3, icon: <Instagram />, href: "https://www.instagram.com/mo3mer1/" },
];

const MainHeader = () => {
  const [isNav, setIsNav] = useState(false);

  const ctx = useContext(ModeContext);

  const currentYear = new Date().getFullYear();

  function burgerHandler() {
    setIsNav((prev) => !prev);
  }

  return (
    <header name="header" className={classes.header}>
      <Link
        to="home"
        smooth={true}
        duration={300}
        offset={-200}
        className={classes.logo}
        onClick={() => setIsNav(false)}
      >
        {ctx.mode === "dark" && <Logo />}
        {ctx.mode === "light" && <LogoLight />}
      </Link>

      <nav className={classes.nav}>
        <ul>
          {NAV_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                smooth={true}
                spy={true}
                duration={300}
                offset={-105}
                activeClass={classes.active}
                onClick={() => setIsNav(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={classes.theme}>
        <button
          onClick={ctx.lightMode}
          className={ctx.mode === "light" ? classes.active : ""}
        >
          <Sun />
        </button>
        <button
          onClick={ctx.darkMode}
          className={ctx.mode === "dark" ? classes.active : ""}
        >
          <Moon />
        </button>
      </div>

      <AnimatePresence>
        {isNav && (
          <motion.nav
            className={classes.moboNav}
            variants={navVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.ul
              variants={navParentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className={classes.rule} style={{ marginTop: "2rem" }} />
              {NAV_LINKS.map((item) => (
                <motion.li key={item.id} variants={navChildrenVariants}>
                  <Link
                    to={item.link}
                    offset={-200}
                    spy={true}
                    duration={300}
                    smooth={true}
                    activeClass={classes.active}
                    onClick={() => setIsNav(false)}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}

              <motion.div
                className={classes.rule}
                initial={{ width: 0 }}
                animate={
                  isNav && {
                    width: "100%",
                    transition: { delay: 0.7, duration: 0.3 },
                  }
                }
              />
              <motion.li
                className={classes.socialMedia}
                variants={navSocialParentVariants}
              >
                {SOCIAL_ARRAY.map((item) => (
                  <motion.a
                    href={item.href}
                    target="_blank"
                    key={item.id}
                    variants={navSocialIconVariants}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.li>
            </motion.ul>
            <div className={classes.moboTheme}>
              <button
                onClick={ctx.lightMode}
                className={ctx.mode === "light" ? classes.active : ""}
              >
                <Sun />
              </button>
              <button
                onClick={ctx.darkMode}
                className={ctx.mode === "dark" ? classes.active : ""}
              >
                <Moon />
              </button>
            </div>
            <motion.p
              className={classes.rights}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.6, duration: 0.5 },
              }}
            >
              All Rights Reserved. ©
              <span className={elmessiri.className}>Muammar.jsx</span> 2023-
              {currentYear}
            </motion.p>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className={classes.burger}>
        <button onClick={burgerHandler}>
          {isNav ? <Close /> : <Burger />}
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
