import React from "react";

const Client = () => {
  return (
    <div>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>What Says Our Customers</h2>
          </div>
          <div
            id="carouselExample2Indicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExample2Indicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExample2Indicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExample2Indicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="img-box">
                    <img src="images/shaket.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Shaket Shubham</h5>
                    <p>
                    A great gym where you can freshen your mind. The trainers are professionally skilled and they will help you do the workout properly. This can be the best place where you can relax, chill and freshen up your mind. Anyone wants to join the gym so this can be best gym in this area.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/shashank.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Shashank Shekhar</h5>
                    <p>
                    The best gym in Bokaro, only place where you have bumper plates, rubber plates and iron plates, Ravi bhaiya is very encouraging and helps everyone at the gym and the overall atmosphere is very friendly. This gym is a must visit .Had an amazing experience!!!!
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/rakhi.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Rakhi Choudhary</h5>
                    <p>
                    Iron University gym one of Best gym around chas bokaro area with wonderful guidance,all equipment ,if you are a thinking about to start a fitness journey then you should got for it !! Nd also great environment... Really appreciate the coach Ravi sir well behavior nd guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
