import styles from "./Input.module.scss";
import { useSelector } from "react-redux";

const Input = ({ placeholder, type, nameOnChangeHandler }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <input
      onChange={nameOnChangeHandler}
      className={`${styles.input} ${theme === "light" ? styles["input--light"] : styles["input--dark"]}`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
