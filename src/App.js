import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Main from "./pages/Main";
import "./App.css";
import DetailTourList from "./pages/DetailTourList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
      <Route path="/list/:tour_id" element={<DetailTourList />} />
    </Routes>
  );
};

export default App;
