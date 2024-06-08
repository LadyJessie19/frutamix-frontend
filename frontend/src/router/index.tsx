import { BrowserRouter as RouterRoutes, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import BaseLayout from "../components/base-layout";
import Home from "../pages/Home";

const Router = () => {
  return (
    <RouterRoutes>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </RouterRoutes>
  );
};

export default Router;
