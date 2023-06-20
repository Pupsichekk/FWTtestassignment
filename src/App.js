import "./App.scss";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";
import { fetchPaintingData } from "./store/painting-slice";
import { useSelector, useDispatch } from "react-redux";
import Paintings from "./Painting/Paintings";
import InputsContainer from "./Inputs/InputsContainer";
import Header from "./UI/Header";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const painting = useSelector((state) => state.painting);
  const curPage = useSelector((state) => state.pagination.curPage);
  const theme = useSelector((state) => state.theme.theme);

  // fetching painting data dynamically when page or filters change
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchPaintingData({ page: curPage, ...painting.filters })).then((data) => setIsLoading(false));
  }, [curPage, dispatch, painting.filters]);

  return (
    <main className={`main ${theme === "light" ? "lightTheme" : "darkTheme"}`}>
      <Header theme={theme} />
      <InputsContainer theme={theme} />
      {isLoading ? <div className="loader"></div> : <Paintings items={painting.items} theme={theme} />}
      <Pagination theme={theme} />
    </main>
  );
}

export default App;
