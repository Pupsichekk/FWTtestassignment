import styles from "./Range.module.scss";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../helpers/IsEmpty";

const Range = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const theme = useSelector((state) => state.theme.theme);

  const handleFormClick = (e) => {
    let date = "";
    if (ref.current.children[1] !== undefined) {
      const from = ref.current.children[1]?.childNodes[0]?.value;
      const to = ref.current.children[1]?.childNodes[2]?.value;
      if (from === undefined && to === undefined) {
        setIsOpen((prevValue) => !prevValue);
        return;
      }
      date = { from, to };
    } else date = "";
    if (isEmpty(date)) {
      props.datesOnChangeHandler("");
    } else props.datesOnChangeHandler(date);

    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <div
      ref={ref}
      className={`${styles.range} ${isOpen && styles["range--open"]} ${theme === "dark" && styles["range--dark"]}`}
      aria-hidden="true"
      onClick={handleFormClick}
    >
      <span className={styles.range__title}>Created</span>
      {isOpen && (
        <div
          className={`${styles["range__сontainer"]} ${theme === "dark" && styles["range__сontainer--dark"]}`}
          onClick={(e) => e.stopPropagation()}
          aria-hidden="true"
        >
          {props.children}
        </div>
      )}
      <svg
        className={`${styles.svg} ${theme === "dark" ? styles["svg--dark"] : styles["svg--light"]}`}
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.36609e-08 1.09203 0L8.90797 6.7345e-07C9.87892 7.57111e-07 10.3652 1.15702 9.67861 1.8337Z" />
      </svg>
    </div>
  );
};

export default Range;
