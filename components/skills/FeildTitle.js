// CSS Module
import classes from "./FeildTitle.module.css";

const FeildTitle = (props) => {
  return (
    <header className={classes.feildTitle}>
      <h3>{props.title}</h3>
    </header>
  );
};

export default FeildTitle;
