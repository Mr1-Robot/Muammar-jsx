// CSS Modules
import classes from "./Hero.module.css";
// Next Image
import Image from "next/image";
// Primary Button
import PrimaryButton from "../ui/PrimaryButton";
// Secondary Button
import SecondaryButton from "../ui/SecondaryButton";
// Circle Icon
import Circle from "../assets/icons/Circle";
// QR Code Image
import QrCode from "../assets/QrCode";
// Framer Motion
import { motion } from "framer-motion";
// useContext Hook
import { useContext } from "react";
// My Context
import { ModeContext } from "@/context/ThemeContext";

const RESUME =
  "https://drive.google.com/file/d/1a8xr6bAPP1wvSj-yJRgOT-XP5xaAy9xv/view?usp=drive_link";

const Hero = () => {
  const ctx = useContext(ModeContext);

  return (
    <>
      <section id="home" className={classes.hero}>
        <motion.p
          className={classes.circle}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          I create web apps with love.
        </motion.p>

        <div className={classes.content}>
          <header>
            <div className={classes.h3Line} />
            <h3>Hey, I&apos;m</h3>
            <div className={classes.h3Line} />
            <motion.div
              className={classes.line}
              initial={{ width: 0 }}
              animate={{
                width: "112%",
                transition: { delay: 0.4, duration: 0.2 },
              }}
            />
            <h1>Muammar M. Abdullah</h1>
            <motion.div
              className={classes.line}
              initial={{ width: 0 }}
              animate={{
                width: "112%",
                transition: { delay: 0.5, duration: 0.4 },
              }}
            />
            <p>
              I craft on creating <span>Front end web apps</span>,
              <span> UI/UX Design</span>, and<span> Social Media Buying</span>
            </p>

            <div className={classes.actions}>
              <div className={classes.buttons}>
                <PrimaryButton link="contact">Contact Me</PrimaryButton>
                <SecondaryButton link={RESUME}>See Resume</SecondaryButton>
              </div>

              <div className={classes.pnpm}>
                <Circle />
                <p>
                  <span>~</span>pnpm add muammar-m-abdullah@now
                </p>
              </div>
            </div>
          </header>

          <motion.figure
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 90,
                duration: 0.3,
                delay: 0.2,
              },
            }}
          >
            <Image
              src="/images/me-0.svg"
              alt="Muammar M. Abdullah personal photo."
              width={400}
              height={400}
              priority
            />
          </motion.figure>
        </div>
      </section>
      <QrCode />
    </>
  );
};

export default Hero;
