// CSS Modules
import classes from "./QrCode.module.css";
// Next Image
import Image from "next/image";

const QrCode = () => {
  return (
    <Image
      src="/images/qr-code.svg"
      width={100}
      height={100}
      alt="Qr Code"
      className={classes.image}
    />
  );
};

export default QrCode;
