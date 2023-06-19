import styles from "./Input.module.scss";

const Input = ({ placeholder, type, nameOnChangeHandler }) => {
  return <input onChange={nameOnChangeHandler} className={styles.input} placeholder={placeholder} type={type} />;
};

export default Input;
