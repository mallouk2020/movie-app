import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:title" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
