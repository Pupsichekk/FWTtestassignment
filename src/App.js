import "./App.scss";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";
import React from "react";
import { fetchPaintingData } from "./store/painting-slice";
import { useSelector, useDispatch } from "react-redux";
import Paintings from "./Painting/Paintings";
import InputsContainer from "./Inputs/InputsContainer";
import Header from "./UI/Header";
import Spinner from "./UI/Spinner";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const painting = useSelector((state) => state.painting);
  const curPage = useSelector((state) => state.pagination.curPage);
  const theme = useSelector((state) => state.theme.theme);

  // fetching painting data dynamically when page or filters change
  useEffect(() => {
    setIsLoading(true);
    const someFunction = async () => {
      await dispatch(fetchPaintingData({ page: curPage, ...painting.filters }));
      setIsLoading(false);
    };
    someFunction();
  }, [curPage, dispatch, painting.filters]);

  return (
    <main className={`main ${theme === "light" ? "lightTheme" : "darkTheme"}`}>
      <Header theme={theme} />
      <InputsContainer theme={theme} />
      {isLoading ? <Spinner theme={theme} /> : <Paintings items={painting.items} theme={theme} />}
      <Pagination theme={theme} />
      <div className="loader"></div>
    </main>
  );
}

export default React.memo(App);
