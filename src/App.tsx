import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoPage from "./utils/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}