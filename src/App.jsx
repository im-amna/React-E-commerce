import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}ProductDetail />
          <Route path="/product-detail" element={< ProductDetail/>} />
          <Route path="/cart" element={< Cart/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
