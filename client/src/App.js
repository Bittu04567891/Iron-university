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
          <Route exact path="/Iron-university/" element={<Home />} />
          <Route path="/Iron-university/about" element={<About />} />
          <Route path="/Iron-university/product" element={<ProductList />} />
          <Route path="/Iron-university/login" element={<Login />} />
          <Route path="/Iron-university/cart" element={<Cart />} />
          <Route path="/Iron-university/register" element={<Register />} />
          <Route path="/Iron-university/profile" element={<Profile />} />
          <Route path="/Iron-university/services" element={<Facilities />} />

          <Route path="/Iron-university/success" element={<Success />} />
          <Route path="/Iron-university/failure" element={<Failure />} />
          <Route
            path="/Iron-university/orderdetails"
            element={<OrderDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
