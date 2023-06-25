import Input from "./Input";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { paintingActions } from "../store/painting-slice";
import Range from "./Range";
import Selects from "./Select";
import React from "react";

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
    const filters = { name, author, location, dates };
    const timer = setTimeout(() => {
      dispatch(paintingActions.setFilters(filters));
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [name, dispatch, author, location, dates]);

  return (
    <div className={styles["inputs-container"]}>
      <Input nameOnChangeHandler={nameOnChangeHandler} placeholder="Name" type="text" />
      <Selects authorOnChangeHandler={authorOnChangeHandler} locationOnChangeHandler={locationOnChangeHandler} />
      <Range datesOnChangeHandler={datesOnChangeHandler}>
        <input
          className={`${styles["range--input"]} ${props.theme === "dark" && styles["range-input--dark"]}`}
          placeholder="from"
          type="text"
        />
        <span className={`${styles.line} ${props.theme === "dark" && styles["line--dark"]}`}></span>
        <input
          className={`${styles["range--input"]} ${props.theme === "dark" && styles["range-input--dark"]}`}
          placeholder="before"
          type="text"
        />
      </Range>
    </div>
  );
};

export default React.memo(InputsContainer);
