import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="site-navbar py-4 js-sticky-header site-navbar-target"
      role="banner"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-3 col-xl-4  d-block">
            <h1 className="mb-0 site-logo">
              <img src="/assets/images/logo.png" alt="" className="img-fluid" />
              <Link to="/" className="text-black h2 mb-0">
                OneScrin<span className="text-primary">.</span>{" "}
              </Link>
            </h1>
          </div>

          <div className="col-12 col-md-9 col-xl-8 main-menu">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="nav-link">
                    Features
                  </Link>
                </li>
                <li className="has-children">
                  <Link to="/about-us" className="nav-link">
                    About Us
                  </Link>
                  <ul className="dropdown arrow-top">
                    <li>
                      <Link to="our-team" className="nav-link">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link to="spydar-africa" className="nav-link">
                        Spydar Africa
                      </Link>
                    </li>
                    <li>
                      <Link to="citural" className="nav-link">
                        Citural
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-section" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    className="btn btn-primary mr-2 mb-2"
                    href="http://206.189.201.54:8001/#/welcome"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0">
            <Link
              to="#"
              className="site-menu-toggle js-menu-toggle text-black float-right"
            >
              <span className="icon-menu h3"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
