import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pb-5">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Contact</h4>
              <div className="contact d-flex flex-column">
                <div className="mb-2 txt-contact">
                  <img className="me-2" src="/img/phone.svg" alt="" />{" "}
                  <a href=""> +6281 1772823 </a>
                </div>
                <div className="txt-contact">
                  <img className="me-2" src="/img/envelope.svg" alt="" />{" "}
                  <a href=""> hello@zeals.asia </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Resources</h4>
              <div className="txt-footer">
                <a href="">API Integration</a>
                <a href="">Referral Programs</a>
                <a href="">Affiliators</a>
                <a href="">Brand Platfrom</a>
                <a href="">Tutorials</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Privacy</h4>
              <div className="txt-footer">
                <a href="">Terms & Services</a>
                <a href="">Policy Privacy</a>
                <a href="">FAQ</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Partnership</h4>
              <div className="txt-footer">
                <a href="">Zeals Academy</a>
                <a href="">Zeals Campus</a>
                <a href="">Partnership Programs</a>
              </div>
            </div>
          </div>
          <div className="social-media mb-5 mt-5">
            <div className="image d-flex flex-row mb-3">
              <a href="">
                <img className="img-fluid " src="/img/instagram.svg" alt="" />
              </a>
              <a href="">
                <img className="img-fluid mx-4" src="/img/twitter.svg" alt="" />
              </a>
              <a href="">
                <img className="img-fluid" src="/img/facebook.svg" alt="" />
              </a>
            </div>
            <a
              href="https://www.youtube.com/watch?v=QqJ-Vp8mvbk&list=RDmwraxVtD7sc&index=9"
              className="link"
            >
              2022 zealsasia. All Rights Reserved
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
