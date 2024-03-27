import React from "react";

import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Us from "../components/us/Us";
import Client from "../components/client/Client";
import Result from "../components/result/Result";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Products />
      <Us />
      <Client />
      <Result />
      <Contact />
    </div>
  );
};

export default Home;
