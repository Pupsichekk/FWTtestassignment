import React from "react";
import Select, { components } from "react-select";
import { useSelector } from "react-redux";
import styles from "./Select.module.scss";

const Selects = (props) => {
  const authors = useSelector((state) => state.painting.authors);
  const locations = useSelector((state) => state.painting.locations);
  const finalizedAuthors = Object.values(authors).map((value) => {
    return { value: value.id, label: value.name };
  });
  const finalizedLocations = Object.values(locations).map((value) => {
    return { value: value.id, label: value.location };
  });
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          className={`${styles.svg} ${theme === "dark" ? styles["svg--dark"] : styles["svg--light"]} ${
            props.selectProps.menuIsOpen ? styles["svg--rotate"] : ""
          }`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.36609e-08 1.09203 0L8.90797 6.7345e-07C9.87892 7.57111e-07 10.3652 1.15702 9.67861 1.8337Z" />
        </svg>
      </components.DropdownIndicator>
    );
  };

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
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        "&:hover": {
          backgroundColor: `${theme === "dark" ? "white" : "#0c0c0c"}`,
          color: `${theme === "dark" ? "#0c0c0c" : "white"};`,
        },
        "&:focus": {
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
        borderRadius: "0",
        backgroundColor: `${theme === "dark" ? "#0C0C0C" : "white"}`,
        border: `${theme === "dark" ? "1px solid white" : "1px solid #0c0c0c"}`,
        borderTop: "1px solid transparent",
      };
    },
    valueContainer: (baseStyles) => {
      return {
        ...baseStyles,
        paddingLeft: "15px",
        paddingRight: "15px",
      };
    },
    indicatorSeparator: (baseStyles) => {
      return {
        ...baseStyles,
        height: 0,
      };
    },
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      stroke: `${theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"}!important`,
      fill: `${theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"} !important`,
      paddingRight: state && "18px",
    }),
  };

  return (
    <>
      <SelectAuthor
        isClearable={true}
        styles={componentStyles}
        authorOnChangeHandler={props.authorOnChangeHandler}
        theme={theme}
        components={{ DropdownIndicator }}
        authors={finalizedAuthors}
      />
      <SelectLocation
        isClearable={true}
        styles={componentStyles}
        locationOnChangeHandler={props.locationOnChangeHandler}
        theme={theme}
        components={{ DropdownIndicator }}
        locations={finalizedLocations}
      />
    </>
  );
};

const SelectAuthor = (props) => {
  return (
    <Select
      className={styles["expand-select"]}
      isClearable={props.isClearable}
      onChange={props.authorOnChangeHandler}
      options={props.authors}
      placeholder="Author"
      styles={props.styles}
      components={props.components}
    />
  );
};

const SelectLocation = (props) => {
  return (
    <Select
      className={styles["expand-select"]}
      isClearable={props.isClearable}
      onChange={props.locationOnChangeHandler}
      options={props.locations}
      placeholder="Location"
      styles={props.styles}
      components={props.components}
    />
  );
};

export default Selects;
