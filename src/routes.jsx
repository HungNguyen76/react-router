import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Event from "./components/Event";
import Login from "./components/Login";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/event" element={<Event />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />}>
        <Route path="productDetail/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
