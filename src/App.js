import './App.css';
import Products from "./components/Products";
import ProductItemDetails from "./components/ProductItemDetails"
import { Route, Routes } from "react-router-dom";

const App = () => (
  <Routes>
    <Route exact path="/" element={<Products/>} />
    <Route exact path="/products/:id" element={<ProductItemDetails/>} />
  </Routes>
);

export default App;
