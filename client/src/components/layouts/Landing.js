import React, { Component } from "react";
import { Input } from "../input/TextInput";
import Feature from "../../pages/features/Feature";
import Footer from "./Footer"
class Landing extends Component {
  render() {
    return (
      <div className="site-blocks-cover" style={{ "margin-top": "15px" }}>
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
                alt={""}
                className="img-fluid img-absolute"
              />

              <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-6 mr-auto">
                  <h1>
                    Take the work experience around entirely under your control.
                  </h1>
                  <p className="mb-2">
                    OneScrin is for everyone, from casual chat to high-powered
                    video collaboration.
                  </p>
                  <p>
                    <input type="checkbox" /> i would like to receive email
                    notifications about OneScrin and its affilliate products. By
                    clicking 'Sign up', you understand and agree to the OneScrin{" "}
                    <a className="" href="#">
                      Terms of Service
                    </a>
                    <br />
                  </p>
                  <div>
                    <a
                      className="btn btn-primary mr-2 mb-2"
                      href="https://account.onescrin.com.ng"
                    >
                      TRY FREE
                    </a>
                    <span>
                      <Input type="text" placeholder="Enter your work Email" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Feature />
        <Footer />
      </div>
    );
  }
}

export default Landing;
