import Input from "./Input";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { paintingActions } from "../store/painting-slice";
import { SelectAuthor, SelectLocation } from "./Select";
import Range from "./Range";

import styles from "./InputsContainer.module.scss";

const InputsContainer = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState("");

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const authorOnChangeHandler = (authorObj) => {
    if (authorObj === null) setAuthor("");
    else setAuthor(authorObj.value);
  };

  const locationOnChangeHandler = (locationObj) => {
    if (locationObj === null) setLocation("");
    else setLocation(locationObj.value);
  };

  const datesOnChangeHandler = (datesObj) => {
    setDates(datesObj);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(paintingActions.setFilters({ name, author, location, dates }));
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [name, dispatch, author, location, dates]);

  return (
    <div className={styles["inputs-container"]}>
      <Input nameOnChangeHandler={nameOnChangeHandler} placeholder="Name" type="text" />
      <SelectAuthor isClearable={true} authorOnChangeHandler={authorOnChangeHandler} />
      <SelectLocation isClearable={true} locationOnChangeHandler={locationOnChangeHandler} />
      <Range datesOnChangeHandler={datesOnChangeHandler}>
        <input
          className={`${styles["range-input"]} ${props.theme === "dark" && styles["range-input--dark"]}`}
          placeholder="From"
          type="text"
        />
        <span className={styles.line}></span>
        <input
          className={`${styles["range-input"]} ${props.theme === "dark" && styles["range-input--dark"]}`}
          placeholder="Before"
          type="text"
        />
      </Range>
    </div>
  );
};

export default InputsContainer;
