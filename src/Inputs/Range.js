import styles from "./Range.module.scss";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Range = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const theme = useSelector((state) => state.theme.theme);

  const handleFormClick = (e) => {
    let date = "";
    if (ref.current.children[1] !== undefined) {
      const from = ref.current.children[1].childNodes[0].value;
      const to = ref.current.children[1].childNodes[2].value;
      if (from === "" && to === "") {
        setIsOpen((prevValue) => !prevValue);
        return;
      }
      date = { from, to };
    } else date = "";
    props.datesOnChangeHandler(date);

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
    </div>
  );
};

export default Range;
