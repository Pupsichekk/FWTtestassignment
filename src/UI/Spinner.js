import styles from "./Spinner.module.scss";

const Spinner = (props) => {
  return <div className={`${styles.loader} ${props.theme === "dark" && styles["loader--dark"]}`}></div>;
};

export default Spinner;
