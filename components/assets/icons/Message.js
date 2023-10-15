// Framer Motion
import { motion } from "framer-motion";

const Message = () => {
  return (
    <motion.svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.2, duration: 0.3 },
      }}
    >
      <path
        d="M14.25 24.9565C20.8767 24.9565 26.25 19.817 26.25 13.4783C26.25 7.13948 20.8767 2 14.25 2C7.62333 2 2.25 7.13948 2.25 13.4783C2.25 16.4056 3.39533 19.0755 5.28067 21.1026C5.85667 21.7245 6.26733 22.5496 6.062 23.3857C5.83716 24.3001 5.41637 25.1492 4.83133 25.8692C5.29953 25.957 5.77432 26.0007 6.25 26C7.95933 26 9.54333 25.4407 10.8433 24.4876C11.9233 24.7937 13.0673 24.9565 14.25 24.9565Z"
        stroke="#F2F2F2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default Message;
