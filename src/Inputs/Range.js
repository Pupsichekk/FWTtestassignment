import styles from "./Range.module.scss";
import { useState } from "react";
import { useRef } from "react";

const Range = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

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
    <div ref={ref} className={styles.range} aria-hidden="true" onClick={handleFormClick}>
      <span className={styles.range__title}>Created</span>
      {isOpen && (
        <div className={styles.range__сontainer} onClick={(e) => e.stopPropagation()} aria-hidden="true">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Range;
