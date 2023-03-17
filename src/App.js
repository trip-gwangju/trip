import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Main from "./pages/Main";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default App;
