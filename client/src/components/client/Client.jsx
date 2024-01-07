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
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Consectetur</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Consectetur</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Consectetur</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
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
