import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import styles from "./Select.module.scss";

export const SelectAuthor = (props) => {
  useEffect(() => {
    const getAuthors = async () => {
      const res = await fetch("https://test-front.framework.team/authors");
      const data = await res.json();
      const newData = Object.values(data).map((value) => {
        return { value: value.id, label: value.name };
      });
      setAuthors(newData);
    };
    getAuthors();
  }, []);
  const [authors, setAuthors] = useState([]);
  return (
    <Select
      className={styles["expand-select"]}
      isClearable={props.isClearable}
      onChange={props.authorOnChangeHandler}
      options={authors}
    />
  );
};

export const SelectLocation = (props) => {
  useEffect(() => {
    const getLocations = async () => {
      const res = await fetch("https://test-front.framework.team/locations");
      const data = await res.json();
      const newData = Object.values(data).map((value) => {
        return { value: value.id, label: value.location };
      });
      setLocations(newData);
    };
    getLocations();
  }, []);
  const [locations, setLocations] = useState([]);
  return (
    <Select
      className={styles["expand-select"]}
      isClearable={props.isClearable}
      onChange={props.locationOnChangeHandler}
      options={locations}
    />
  );
};
