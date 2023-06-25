import styles from "./Paintings.module.scss";
import Painting from "./Painting";
import React from "react";
import { useSelector } from "react-redux";

const Paintings = (props) => {
  const authors = useSelector((state) => state.painting.authors);
  const locations = useSelector((state) => state.painting.locations);
  return (
    <div className={styles.grid}>
      {props.items.length === 0 ? (
        <div>No items found :&#60; </div>
      ) : (
        props.items.map((painting) => {
          return <Painting authors={authors} locations={locations} key={painting.id} painting={painting} />;
        })
      )}
    </div>
  );
};

export default React.memo(Paintings);
