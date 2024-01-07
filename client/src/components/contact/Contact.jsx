import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              <span>Get In Touch</span>
            </h2>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-md-6 ">
                <form action="">
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Name" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div className="mt-5">
                        <input type="text" placeholder="Message" />
                      </div>
                      <div className="mt-5">
                        <button type="submit">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14714.846062056638!2d86.1446394!3d22.7760849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f42182cf8f9be3%3A0x5b448fa7db556451!2sIron%20University!5e0!3m2!1sen!2sin!4v1704605348046!5m2!1sen!2sin"
                      width="600"
                      height="300"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
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

export default Contact;
