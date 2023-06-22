import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Select.module.scss";

const Selects = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const componentStyles = {
    control: (baseStyles, state) => {
      return {
        ...baseStyles,
        border: `${theme === "dark" ? "1px solid white" : "1px solid #0c0c0c"}`,
        boxShadow: "none",
        backgroundColor: `${theme === "dark" && "#0C0C0C"}`,
        height: "100%",
        borderRadius: state.menuIsOpen ? "8px 8px 0 0" : "8px",
        minHeight: "45px",
        borderBottom: `${
          state.menuIsOpen
            ? theme === "dark"
              ? "1px solid rgba(255, 255, 255, 0.3)"
              : "1px solid rgba(0, 0, 0, 0.3)"
            : theme === "dark"
            ? "1px solid white"
            : "1px solid #0c0c0c"
        }`,
        cursor: "pointer",
        "&:hover": {
          outline: `0 !important`,
        },
      };
    },
    option: (baseStyles) => {
      return {
        ...baseStyles,
        color: `${theme === "dark" ? "white" : "black"}`,
        backgroundColor: `${theme === "dark" && "#0C0C0C"}`,
        "&:hover": {
          backgroundColor: `${theme === "dark" ? "white" : "#0c0c0c"}`,
          color: `${theme === "dark" ? "#0c0c0c" : "white"};`,
        },
      };
    },
    placeholder: (baseStyles) => {
      return {
        ...baseStyles,
        color: `${theme === "dark" ? "white" : "#0c0c0c"}`,
        fontSize: "13px",
        fontWeight: "400",
        lineHeight: "15px",
      };
    },
    singleValue: (baseStyles) => {
      return {
        ...baseStyles,
        color: `${theme === "dark" ? "white" : "#0c0c0c"}`,
      };
    },
    menu: (baseStyles) => {
      return {
        ...baseStyles,
        marginTop: "0",
        backgroundColor: `${theme === "dark" ? "#0C0C0C" : "white"}`,
      };
    },
    valueContainer: (baseStyles) => {
      return {
        ...baseStyles,
        paddingLeft: "15px",
        paddingRight: "15px",
      };
    },
  };

  return (
    <>
      <SelectAuthor isClearable={true} styles={componentStyles} authorOnChangeHandler={props.authorOnChangeHandler} />
      <SelectLocation
        isClearable={true}
        styles={componentStyles}
        locationOnChangeHandler={props.locationOnChangeHandler}
      />
    </>
  );
};

const SelectAuthor = (props) => {
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
      styles={props.styles}
    />
  );
};

const SelectLocation = (props) => {
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
      styles={props.styles}
    />
  );
};

export default Selects;
