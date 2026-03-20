import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portuguese from "./pages/Portuguese";
import English from "./pages/English";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portuguese />} />
          <Route path="/en" element={<English />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
