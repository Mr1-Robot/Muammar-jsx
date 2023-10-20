// CSS Modules
import classes from "./QrCode.module.css";
// Next Image
import Image from "next/image";
// useContext Hook
import { useContext } from "react";
// Mode Context
import { ModeContext } from "@/context/ThemeContext";

const QrCode = () => {
  const ctx = useContext(ModeContext);
  const src =
    ctx.mode === "dark" ? "/images/qr-code.svg" : "/images/qr-code-light.svg";

  return (
    <Image
      src={src}
      width={100}
      height={100}
      alt="Qr Code"
      className={classes.image}
    />
  );
};

export default QrCode;
