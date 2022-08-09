import { Routes, Route } from "react-router-dom";
import ErrorIndex from "./pages/Error/ErrorIndex";
import FixturesIndex from "./pages/Fixtures/FixturesIndex";
import HomeIndex from "./pages/Home/HomeIndex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndex />} />
      <Route path="/fixtures" element={<FixturesIndex />} />
      <Route path="/error" element={<ErrorIndex />} />
    </Routes>
  );
}

export default App;
