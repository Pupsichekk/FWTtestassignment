import styles from "./Painting.module.scss";
import { useState } from "react";
const Painting = (props) => {
  const { painting } = props;

  // Could be redone some other way, but otherwise touchpad support is limited.
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => setIsHovered((prevState) => !prevState)} // for touch screen devices
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={styles.painting}
    >
      <img
        className={styles["painting--img"]}
        src={`https://test-front.framework.team${painting.imageUrl}`}
        alt={painting.name}
      />
      <h2 className={`${styles["painting--overlay"]} ${isHovered ? styles["painting--overlay__active"] : ""}`}>
        {painting.name}
        <ul className={styles["painting--overlay__description"]}>
          <li className={styles["painting--overlay__description--item"]}>
            <span className={styles["painting--overlay__description--bold"]}>Author:</span>
            <span className={styles["painting--overlay__description--thin"]}>{painting.author}</span>
          </li>
          <li className={styles["painting--overlay__description--item"]}>
            <span className={styles["painting--overlay__description--bold"]}>Created:</span>
            <span className={styles["painting--overlay__description--thin"]}> {painting.created}</span>
          </li>
          <li className={styles["painting--overlay__description--item"]}>
            <span className={styles["painting--overlay__description--bold"]}>Location:</span>
            <span className={styles["painting--overlay__description--thin"]}> {painting.location}</span>
          </li>
        </ul>
      </h2>
    </div>
  );
};
export default Painting;
