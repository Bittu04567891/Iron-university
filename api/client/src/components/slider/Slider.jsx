import React from "react";

const Slider = () => {
  return (
    <div className="hero_area">
      <section className=" slider_section position-relative">
        <div className="slider_container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                      <div className="detail-box">
                        <h2>Fit In, Stand Out</h2>
                        <h3>Embrace Wellness by Joining Our Gym Community</h3>
                        <p>
                        Unlock exclusive benefits and join a vibrant fitness community. Your transformative journey begins with a simple sign-up
                        
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                      <div className="detail-box">
                        <h2>Personal Training</h2>
                        <h3>Personalized Training for Success</h3>
                        <p>
                        Personalized training for your peak performance—ignite your fitness journey with expert guidance and tailored workout programs
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                      <div className="detail-box">
                        <h2>Nutrient Essentials</h2>
                        <h3>Elevate Your Well-Being with Quality Supplements</h3>
                        <p>
                        Invest in your wellness journey with quality supplements. Choose products aligned with your health and fitness goals for optimal results
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                          
                        </div>
                      </div>
                    </div>
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

export default Slider;
