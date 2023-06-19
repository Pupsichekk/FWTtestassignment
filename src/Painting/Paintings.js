import styles from "./Paintings.module.scss";
import Painting from "./Painting";
import React from "react";

const Paintings = React.memo((props) => {
  return (
    <div className={styles.grid}>
      {props.items.map((painting) => {
        return <Painting key={painting.id} painting={painting} />;
      })}
    </div>
  );
});

export default Paintings;
