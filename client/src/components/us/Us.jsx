import React from "react";

const Us = () => {
  return (
    <div>
      {" "}
      <section className="us_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Why Choose Us</h2>
          </div>
          <div className="us_container">
            <div className="box">
              <div className="img-box">
                <img src="images/u-1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>QUALITY EQUIPMENT</h5>
                <p>
                Optimize your workout experience with our premium equipment, designed for quality, durability, and unmatched performance
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/u-2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>HEALTHY NUTRITION PLAN</h5>
                <p>
                Nourish your well-being with our balanced nutrition plans—crafted for vitality, flavor, and sustainable healthy habits
                </p>
              </div>
            </div>
            
            <div className="box">
              <div className="img-box">
                <img src="images/u-4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>UNIQUE TO YOUR NEEDS</h5>
                <p>
                Personalized, simple, and unique nutrition plans for your healthy lifestyle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Us;
