import styles from "./Painting.module.scss";
import { useState, useEffect } from "react";
import { getPaintingLocation, getPaintingAuthor } from "../store/painting-slice";
import { useDispatch } from "react-redux";

const Painting = (props) => {
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("");
  const { painting } = props;
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getLocation = async () => {
      const temp = await dispatch(getPaintingLocation(painting.locationId));
      setLocation(temp.payload);
    };
    const getAuthor = async () => {
      const temp = await dispatch(getPaintingAuthor(painting.authorId));
      setAuthor(temp.payload);
    };
    // Fetching author and location data on component mount
    getLocation();
    getAuthor();
  }, [dispatch, painting.authorId, painting.locationId]);

  return (
    <div
      onClick={() => setIsHovered((prevState) => !prevState)} // for touch screen devices
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={styles.painting}
    >
      <img
        className={styles["painting--img"]}
        src={`https://test-front.framework.team/${painting.imageUrl}`}
        alt={painting.name}
      />
      <h2 className={`${styles["painting--overlay"]} ${isHovered ? styles["painting--overlay__active"] : ""}`}>
        {painting.name}
        <ul className={styles["painting--overlay__description"]}>
          <li className={styles["painting--overlay__description--item"]}>
            <span className={styles["painting--overlay__description--bold"]}>Author:</span>
            <span className={styles["painting--overlay__description--thin"]}>{author}</span>
          </li>
          <li className={styles["painting--overlay__description--item"]}>
            <span className={styles["painting--overlay__description--bold"]}>Created:</span>
            <span className={styles["painting--overlay__description--thin"]}> {painting.created}</span>
          </li>
          <li className={styles["painting--overlay__description--item"]}>
            <span className={styles["painting--overlay__description--bold"]}>Location:</span>
            <span className={styles["painting--overlay__description--thin"]}> {location}</span>
          </li>
        </ul>
      </h2>
    </div>
  );
};
export default Painting;
