import React from "react";

const Products = () => {
  return (
    <div>
      {" "}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>
          </div>
          <div className="service_container">
            <div className="box">
              <img src="images/gym-e.jpeg" alt="" />
              <h6 className="visible_heading">Equipments</h6>
              <div className="link_box">
                <a href="">
                  <img src="images/gym-e.jpeg" alt="" />
                </a>
                <h6>Equipments</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/pt.png" alt="" />
              <h6 className="visible_heading">Personal Training</h6>
              <div className="link_box">
                <a href="">
                  <img src="images/pt.png" alt="" />
                </a>
                <h6>Personal Training</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/buy-supplements.jpg" alt="" />
              <h6 className="visible_heading">Supplements</h6>
              <div className="link_box">
                <a href="">
                  <img src="images/buy-supplements.jpg" alt="" />
                </a>
                <h6>Supplements</h6>
              </div>
            </div>
            <div className="box">
              <img src="images/celebration.jpeg" alt="" />
              <h6 className="visible_heading">Celebration</h6>
              <div className="link_box">
                <a href="">
                  <img src="images/celebration.jpeg" alt="" />
                </a>
                <h6>Celebration</h6>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
