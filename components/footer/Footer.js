// CSS Modules
import classes from "./Footer.module.css";
// Logo
import Logo from "../assets/Logo";
// Logo Light
import LogoLight from "../assets/LogoLight";
// LinkedIn
import LinkedIn from "../assets/icons/LinkedIn";
// GitHub
import GitHub from "../assets/icons/GitHub";
// Behance
import Behance from "../assets/icons/Behance";
// Mail
import Mail from "../assets/icons/Mail";
// Instagram
import Instagram from "../assets/icons/Instagram";
// Facebook
import Facebook from "../assets/icons/Facebook";
// Telegram
import Telegram from "../assets/icons/Telegram";
// QR Code Image
import QrCode from "../assets/QrCode";
// React Scroll
import { Link } from "react-scroll";
// El_Messiri Google Font
import { El_Messiri } from "next/font/google";
// Framer Motion
import { motion } from "framer-motion";
// useContext Hook
import { useContext } from "react";
// Mode Context
import { ModeContext } from "@/context/ThemeContext";

const el_messiri = El_Messiri({ subsets: ["latin"] });

const SOCIAL_ICON = [
  {
    id: 0,
    icon: <LinkedIn />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/muammar-jsx/",
  },
  {
    id: 1,
    icon: <GitHub />,
    title: "GitHub",
    href: "https://github.com/Mr1-Robot/",
  },
  {
    id: 2,
    icon: <Behance />,
    title: "Behance",
    href: "https://behance.net/muammar-jsx/",
  },
  {
    id: 3,
    icon: <Mail />,
    title: "Mail",
    href: "mailto:muammarm.abdullah@gmail.com",
  },
  {
    id: 4,
    icon: <Instagram />,
    title: "Instagram",
    href: "https://instagram.com/mo3mer1/",
  },
  {
    id: 5,
    icon: <Facebook />,
    title: "Facebook",
    href: "https://www.facebook.com/moamer.mohamed.509/",
  },
  {
    id: 6,
    icon: <Telegram />,
    title: "Telegram",
    href: "https://t.me/PnpmAddMuammar",
  },
];

const contentVariants = {
  start: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
  animate: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const logoVariants = {
  start: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const socialVariants = {
  start: { transition: { staggerChildren: 0.05 } },
  animate: { transition: { staggerChildren: 0.05 } },
};

const iconVariants = {
  start: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  whileHover: { scale: 1.05 },
};

const Footer = () => {
  const ctx = useContext(ModeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={classes.contact}>
      <motion.div
        className={classes.content}
        variants={contentVariants}
        initial="start"
        whileInView="animate"
      >
        <motion.div variants={logoVariants}>
          <Link to="home" smooth={true} offset={-200} className={classes.logo}>
            {ctx.mode === "dark" ? <Logo /> : <LogoLight />}
          </Link>
        </motion.div>

        <motion.div className={classes.social} variants={socialVariants}>
          {SOCIAL_ICON.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              variants={iconVariants}
              whileHover="whileHover"
            >
              {item.icon}
              {item.title}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.8 },
        }}
      >
        <QrCode />
      </motion.div>
      <p>
        All Rights Reserved. ©
        <span className={el_messiri.className}>Muammar.jsx </span>2023-
        {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
