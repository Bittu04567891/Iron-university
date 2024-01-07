import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Us from "../components/us/Us";
import Client from "../components/client/Client";
import Result from "../components/result/Result";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Products />
      <Us />
      <Client />
      <Result />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
