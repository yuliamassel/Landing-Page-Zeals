import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="right">
            <h4 className="pb-3">Contact</h4>
            <div className="contact d-flex flex-column">
                <div className="mb-2 txt-footer">
                <img className="me-2" src="/img/phone.svg" alt="" /> <span>+6281 1772823</span>
                </div>
                <div className="txt-footer">
                <img className="me-2" src="/img/envelope.svg" alt="" /> <span>hello@zeals.asia</span>
                </div>
            </div>
        </div>
        <div className="mid">
            <h4 className="pb-3">Resources</h4>
            <div className="txt-footer">
                <p>API Integration</p>
                <p>Referral Programs</p>
                <p>Affiliators</p>
                <p>Brand Platfrom</p>
                <p>Tutorials</p>
            </div>
        </div>
        <div className="mid2">
            <h4 className="pb-3">Privacy</h4>
            <div className="txt-footer">
                <p>Terms & Services</p>
                <p>Policy Privacy</p>
                <p>FAQ</p>
            </div>
        </div>
        <div>
            <h4 className="pb-3">Partnership</h4>
            <div className="txt-footer">
                <p>Zeals Academy</p>
                <p>Zeals Campus</p>
                <p>Partnership Programs</p>
            </div>
        </div>
      </footer>
      <div className="social-media mb-4">
        <div className="image d-flex flex-row mb-3">
            <img className="img-fluid " src="/img/instagram.svg" alt="" />
            <img className="img-fluid mx-4" src="/img/twitter.svg" alt="" />
            <img className="img-fluid" src="/img/facebook.svg" alt="" />
        </div>
        <p>2022 zealsasia. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
