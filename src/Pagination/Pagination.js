import styles from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { paginationActions } from "../store/pagination-slice";
import PaginationButton from "./PaginationButton";
import React from "react";
import { useSelector } from "react-redux";

const maxPage = 3;

const arrayPages = [];
for (let i = 0; i < maxPage; i++) {
  arrayPages.push(i);
}

const Pagination = (props) => {
  const currentPage = useSelector((state) => state.pagination.curPage);
  const dispatch = useDispatch();

  // Handling arrow elements
  const onPrevClick = () => {
    dispatch(paginationActions.updatePage(currentPage - 1));
  };

  const onFirstClick = () => {
    dispatch(paginationActions.updatePage(1));
  };

  const onNextClick = () => {
    dispatch(paginationActions.updatePage(currentPage + 1));
  };

  const onLastClick = () => {
    dispatch(paginationActions.updatePage(maxPage));
  };

  // Handling "number" element click, binding page when creating component
  const onPageClick = (page) => {
    dispatch(paginationActions.updatePage(page));
  };

  return (
    <div className={styles.pagination}>
      <button
        className={props.theme === "dark" ? styles.dark : ""}
        onClick={onFirstClick}
        disabled={currentPage > 1 ? false : true}
      >
        &laquo;
      </button>
      <button
        className={props.theme === "dark" ? styles.dark : ""}
        onClick={onPrevClick}
        disabled={currentPage - 1 > 0 ? false : true}
      >
        {" "}
        &lsaquo;
      </button>
      {arrayPages.map((el) => (
        <PaginationButton
          isDarkTheme={props.theme === "dark"}
          darkThemeClass={styles.dark}
          key={el + 1}
          onClick={onPageClick.bind(null, el + 1)}
          className={styles.active}
          curPage={currentPage}
          page={el + 1}
        />
      ))}
      <button
        className={props.theme === "dark" ? styles.dark : ""}
        onClick={onNextClick}
        disabled={currentPage + 1 > maxPage ? true : false}
      >
        &rsaquo;
      </button>
      <button
        className={props.theme === "dark" ? styles.dark : ""}
        onClick={onLastClick}
        disabled={currentPage === maxPage ? true : false}
      >
        &raquo;
      </button>
    </div>
  );
};
export default React.memo(Pagination);
