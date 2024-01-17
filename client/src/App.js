import React from "react";
import Home from "./pages/Home";
import About from "./pages/about/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductList from "./pages/productList/ProductList";
import Login from "./pages/login/Login";

import Facilities from "./pages/facilities/Facilities";
import OrderPage from "./pages/ordered/Orderpage";

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
          <Route path="/Iron-university/Orderpage" element={<OrderPage />} />
          <Route path="/Iron-university/Facilities" element={<Facilities />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
