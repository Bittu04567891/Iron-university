import React from "react";
import Home from "./pages/Home";
import About from "./pages/about/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductList from "./pages/productList/ProductList";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Success from "./components/Success";
import Failure from "./components/Failure";
import OrderDetails from "./components/orderDetails/OrderDetails";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Facilities from "./pages/facilities/Facilities";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Facilities />} />

          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
