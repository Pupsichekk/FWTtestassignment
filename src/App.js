import "./App.scss";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";
import { fetchPaintingData } from "./store/painting-slice";
import { useSelector, useDispatch } from "react-redux";
import Paintings from "./Painting/Paintings";
import InputsContainer from "./Inputs/InputsContainer";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const painting = useSelector((state) => state.painting);
  const curPage = useSelector((state) => state.pagination.curPage);

  // fetching painting data dynamically when page changes
  useEffect(() => {
    console.log(curPage, painting.filters);
    setIsLoading(true);
    dispatch(fetchPaintingData({ page: curPage, ...painting.filters })).then((data) => setIsLoading(false));
  }, [curPage, dispatch, painting.filters]);

  const spinner = <div className="loader"></div>;
  return (
    <div className="App">
      <InputsContainer />
      {isLoading ? spinner : <Paintings items={painting.items} />}
      <Pagination />
    </div>
  );
}

export default App;
