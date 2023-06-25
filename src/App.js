import "./App.scss";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";
import React from "react";
import { fetchPaintingData, fetchAllPaintingData } from "./store/painting-slice";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Paintings from "./Painting/Paintings";
import InputsContainer from "./Inputs/InputsContainer";
import Header from "./UI/Header";
import Spinner from "./UI/Spinner";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const filters = useSelector((state) => state.painting.filters, shallowEqual);
  const items = useSelector((state) => state.painting.items, shallowEqual);
  const curPage = useSelector((state) => state.pagination.curPage);
  const theme = useSelector((state) => state.theme.theme);

  // fetching painting data dynamically when page or filters change
  useEffect(() => {
    setIsLoading(true);
    const getPaintingsPage = async () => {
      dispatch(fetchPaintingData({ page: curPage, ...filters }));
      setIsLoading(false);
    };
    const getAllPaintings = async () => {
      dispatch(fetchAllPaintingData(filters));
    };
    getPaintingsPage();
    getAllPaintings();
  }, [curPage, dispatch, filters]);

  return (
    <main className={`main ${theme === "light" ? "lightTheme" : "darkTheme"}`}>
      <Header theme={theme} />
      <InputsContainer theme={theme} />
      {isLoading ? <Spinner theme={theme} /> : <Paintings items={items} theme={theme} />}
      <Pagination theme={theme} />
    </main>
  );
}

export default React.memo(App);
