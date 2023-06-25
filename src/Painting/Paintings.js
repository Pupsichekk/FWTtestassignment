import styles from "./Paintings.module.scss";
import Painting from "./Painting";
import React from "react";

const Paintings = (props) => {
  return (
    <div className={styles.grid}>
      {props.items.length === 0 ? (
        <div>No items found :&#60; </div>
      ) : (
        props.items.map((painting) => {
          return <Painting key={painting.id} painting={painting} />;
        })
      )}
    </div>
  );
};

export default React.memo(Paintings);
