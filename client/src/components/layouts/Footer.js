import React from "react";

function Footer() {
  return (
    <div className="footer py-5 text-center">
      <div className="container">
        <div class="row mb-5">
          <div class="col-12">
            <p class="mb-0">
              <a href="#" class="p-3">
                <span class="icon-facebook"></span>
              </a>
              <a href="#" class="p-3">
                <span class="icon-twitter"></span>
              </a>
              <a href="#" class="p-3">
                <span class="icon-instagram"></span>
              </a>
              <a href="#" class="p-3">
                <span class="icon-linkedin"></span>
              </a>
              <a href="#" class="p-3">
                <span class="icon-pinterest"></span>
              </a>
            </p>
          </div>
        </div>
        Copyright &copy;
        {new Date().getFullYear()} <br />
        OneScrin | Developed with
        <i className="icon-heart text-danger" aria-hidden="true"></i> by
        <a href="https://spydarinc.com.ng" target="_blank">
          Spydar Africa
        </a>{" "}
        &amp;{" "}
        <a href="https://citural.com.ng" target="_blank">
          {" "}
          Citural
        </a>
      </div>
    </div>
  );
}

export default Footer;
