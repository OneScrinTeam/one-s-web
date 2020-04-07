import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="site-wrap" id="home-section">
        <div className="site-blocks-cover" style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-md-12"
                style={{ position: "relative" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="/assets/images/commune.png"
                  alt={"commune"}
                  className="img-fluid img-absolute"
                />
                <div
                  className="row mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="col-lg-6 mr-auto">
                    <h1>
                      Take the work experience around entirely under your
                      control.
                    </h1>
                    <p className="mb-5">
                      OneScrin is for everyone, from casual chat to high-powered
                      video collaboration.
                    </p>
                    <div>
                      <Link to="/sign-up" className="btn btn-primary mr-2 mb-2">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
