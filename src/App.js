/** @format */

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Options from "./pages/Options/Options";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Products from "./pages/products/Products";

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/categ/options" element={<Options />} />
          <Route path="/product/list" element={<Products />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
