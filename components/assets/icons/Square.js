// Framer Motion
import { motion } from "framer-motion";

const Square = () => {
  return (
    <motion.svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
    >
      <g clipPath="url(#clip0_451_715)">
        <path
          d="M26.8145 7.53846L23.8145 5.65313M26.8145 7.53846V10.7692M26.8145 7.53846L23.8145 9.42379M2.81445 7.53846L5.81445 5.65313M2.81445 7.53846L5.81445 9.42379M2.81445 7.53846V10.7692M14.8145 15.0769L17.8145 13.1916M14.8145 15.0769L11.8145 13.1916M14.8145 15.0769V18.3077M14.8145 28L17.8145 26.1147M14.8145 28V24.7692M14.8145 28L11.8145 26.1147M11.8145 1.8839L14.8145 0L17.8145 1.88533M26.8145 17.2308V20.4615L23.8145 22.3469M5.81445 22.3469L2.81445 20.4615V17.2308"
          stroke="#F3F3F3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_451_715">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(0.814453)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default Square;
