import React, { Component } from "react";
import Footer from "../../components/layouts/Footer";

class Feature extends Component {
  render() {
    return (
      <div id="features">
        <div class="site-section" id="features-section">
          <div class="container">
            <div
              class="row mb-5 justify-content-center text-center"
              data-aos="fade-up"
            >
              <div class="col-7 text-center  mb-5">
                <h2 class="section-title">OneScrin Features</h2>
                <p class="lead">More than simple chat. Custom Communication.</p>
              </div>
            </div>
            <div class="row align-items-stretch">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="text-primary icon-shield"></span>
                    </span>
                  </div>
                  <div>
                    <h3>Blockchain & Security</h3>
                    <p>
                      ​​All data can be end-to-end encrypted, meaning no-one
                      else can ever sdrop on your conversations, not even server
                      admins.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="text-primary icon-camera"></span>
                    </span>
                  </div>
                  <div>
                    <h3>
                      {" "}
                      ​​Smarter Voice & Video Conferencing even on a 2G Network
                    </h3>
                    <p>
                      ​​OneScrin provides one touch voice and video calls and
                      conferences on all platforms. On mobile, respond to calls
                      as natively as you do a normal phone call.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="text-primary icon-settings_backup_restore"></span>
                    </span>
                  </div>
                  <div>
                    <h3>More to Share</h3>
                    <p>
                      ​​Enjoy secure video-first meetings with integrated voice
                      and screen sharing, giving you the power to collaborate
                      more effectively with anyone, anywhere anytime.--without
                      the need to travel.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="text-primary icon-notifications"></span>
                    </span>
                  </div>

                  <div>
                    <h3>​​Bridge other apps and networks</h3>
                    <p>
                      ​​Communicate with users using other apps with bridges. In
                      a OneScrin room, add a bridge to another app (like a Slack
                      channel) to transparently talk to each other without ever
                      leaving your respective apps.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="text-primary icon-chat"></span>
                    </span>
                  </div>
                  <div>
                    <h3>Connect</h3>
                    <p>
                      Bring all the apps you use during the day to a single
                      place.
                    </p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="text-primary icon-power"></span>
                    </span>
                  </div>
                  <div>
                    <h3>​​Import your team to OneScrin</h3>
                    <p>
                      ​​Import feature gives you an opportunity to transfer your
                      message history and other team data from a third-party
                      messenger directly to OneScrin ​​We support import from:
                    </p>
                    w
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Feature;
