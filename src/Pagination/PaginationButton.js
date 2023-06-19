const PaginationButton = (props) => {
  return (
    <button onClick={props.onClick} key={props.page} className={props.curPage === props.page ? props.className : ""}>
      {props.page}
    </button>
  );
};

export default PaginationButton;
