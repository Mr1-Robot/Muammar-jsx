// CSS Modules
import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
};

export default SectionHeader;
