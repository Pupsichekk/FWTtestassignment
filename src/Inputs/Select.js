import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Select.module.scss";

export const SelectAuthor = (props) => {
  const theme = useSelector((state) => state.theme.theme);
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
      placeholder="Author"
      styles={{
        control: (baseStyles) => {
          return {
            ...baseStyles,
            border: `${theme === "dark" ? "1px solid white" : "1px solid black"}`,
            boxShadow: "none",
            backgroundColor: `${theme === "dark" && "#0C0C0C"}`,
            "&:hover": {
              border: "1px solid black",
            },
          };
        },
        option: (baseStyles, state) => {
          return {
            ...baseStyles,
            color: `${theme === "dark" ? "white" : "black"}`,
            backgroundColor: `${theme === "dark" && "#0C0C0C"}`,
            "&:hover": {
              backgroundColor: `${theme === "dark" ? "white" : "black"}`,
              color: `${theme === "dark" ? "black" : "white"};`,
            },
          };
        },
        placeholder: (baseStyles, state) => {
          return {
            ...baseStyles,
            color: `${theme === "dark" ? "white" : "black"}`,
          };
        },
      }}
    />
  );
};

export const SelectLocation = (props) => {
  const theme = useSelector((state) => state.theme.theme);
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
      placeholder="Location"
      styles={{
        control: (baseStyles) => {
          return {
            ...baseStyles,
            border: `${theme === "dark" ? "1px solid white" : "1px solid black"}`,
            boxShadow: "none",
            backgroundColor: `${theme === "dark" && "#0C0C0C"}`,
            "&:hover": {
              border: "1px solid black",
            },
          };
        },
        option: (baseStyles, state) => {
          return {
            ...baseStyles,
            color: `${theme === "dark" ? "white" : "black"}`,
            backgroundColor: `${theme === "dark" && "#0C0C0C"}`,
            "&:hover": {
              backgroundColor: `${theme === "dark" ? "white" : "black"}`,
              color: `${theme === "dark" ? "black" : "white"};`,
            },
          };
        },
        placeholder: (baseStyles, state) => {
          return {
            ...baseStyles,
            color: `${theme === "dark" ? "white" : "black"}`,
          };
        },
      }}
    />
  );
};
