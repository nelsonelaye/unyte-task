import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Compare from "./pages/compare";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
