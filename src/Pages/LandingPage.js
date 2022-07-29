import axios from "axios";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import { useNavigate } from "react-router";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: null || 0,
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactUs = (e) => {
    axios
      .post("http://zeals.id/apiv1/maildemo", {
        fullName: form.fullName,
        email: form.email,
        companyName: form.companyName,
        phoneNumber: form.phoneNumber,
        notes: form.notes,
      })
      .then((res) => {
        const result = res.data;
        console.log("ini hasilnya", result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid gx-0">
      <Navbar />
      <Carousel>
        <Carousel.Item>
          <img
            className="mt-5 img-fluid img-slide"
            src="/img/Business_team_looking_for_new_people_1-removebg-preview.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="first-slide">
              <h3 className="txt-join">Join Us Now!</h3>
              <h1 className="txt-slide">
                World #1 <br /> Digital Marketing <br /> Platform
              </h1>
              <Button className="btn-join mt-2">Join Us</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mt-5 img-fluid img-slide"
            src="/img/Business_team_looking_for_new_people_1-removebg-preview.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="first-slide">
              <h3 className="txt-join">Join Us Now!</h3>
              <h1 className="txt-slide">
                World #1 <br /> Digital Marketing <br /> Platform
              </h1>
              <Button className="btn-join mt-xl-2 mt-0">Join Us</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mt-5 img-fluid img-slide"
            src="/img/Business_team_looking_for_new_people_1-removebg-preview.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="first-slide">
              <h3 className="txt-join">Join Us Now!</h3>
              <h1 className="txt-slide">
                World #1 <br /> Digital Marketing <br /> Platform
              </h1>
              <Button className="btn-join mt-2">Join Us</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mt-5 img-fluid img-slide"
            src="/img/Business_team_looking_for_new_people_1-removebg-preview.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="first-slide">
              <h3 className="txt-join">Join Us Now!</h3>
              <h1 className="txt-slide">
                World #1 <br /> Digital Marketing <br /> Platform
              </h1>
              <Button className="btn-join mt-2">Join Us</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="our-product py-5">
          <h2>Our Product</h2>
          <p className="mx-xl-5 px-xl-5 mx-2 px-2">
            Integrated Digital Marketing Ecosystem that helps you connect with
            your audience. <br /> Aliquam erat volutpat. Nunc vitae pharetra
            ipsum. Morbi ac aliquet risus.
          </p>
        </div>
        <div className="features mb-5 d-lg-block d-xl-block">
          <div className="features1 px-5">
            <h5 className="mb-5 ms-5">Affiliate Marketing Platform</h5>
            <div className="desc">
              <img
                src="/img/products/affiliate_marketing.png"
                alt=""
                width={480}
                className="img-fluid me-xl-4"
              />
              <p>
                Zeals Affiliate marketing are those who are socially active
                and are connected to your targeted real-person that will
                share Zeals ‘unique link’ to enhance exposure and
                conversion at the same time.
              </p>
            </div>
          </div>
          <div className="features1 px-5 my-5">
            <h5 className="mb-5 ms-3">Online to Offline Voucher</h5>
            <div className="desc text-end">
              <p>
                Our online-to-offline system enables you to create an actionable
                and measurable campaign at the same time, in one single
                platform through specifically generated QR for your
                campaign.
              </p>
              <img
                src="/img/products/online_to_offline.png"
                alt=""
                width={480}
                className="img-fluid ms-4"
              />
            </div>
          </div>
          <div className="features1 px-5">
            <h5 className="mb-5 ms-5">Social Media Listening</h5>
            <div className="desc">
              <img
                src="/img/products/social_media_listening.png"
                alt=""
                width={480}
                className="img-fluid me-4"
              />
              <p>
                With Social Media Listening you will get hearing ability and strategic action by tracking online conversations related to your brand and industry to help you develop an effective solution that perfectly fits into your customer needs
              </p>
            </div>
          </div>
          <div className="features1 px-5 my-5">
            <h5 className="mb-5 ms-3">Digital Marketing Consultant</h5>
            <div className="desc text-end">
              <p>
                Our Digital Marketing Consultant will assist designing digital
                strategies and providing solutions to help you achieve business
                goals through the implementation of Digital Marketing.
              </p>
              <img
                src="/img/products/digital_marketing_consultant.png"
                alt=""
                width={480}
                className="img-fluid ms-4"
              />
            </div>
          </div>
          <div className="features1 px-5">
            <h5 className="mb-5 ps-5">Social Media Scoring</h5>
            <div className="desc">
              <img
                src="/img/products/SOCIAL MEDIA SCORING.png"
                alt=""
                width={480}
                className="img-fluid me-4"
              />
              <p>
                Know where you stand with our Social Media Scoring. 
                You can find out the influence of your brand's social media accounts on users and followers, and how well your strategy is performing on social channels.
              </p>
            </div>
          </div>
          <div className="features1 px-5 my-5">
            <h5 className="mb-5 me-5">Marketplace for influencer and buzzer</h5>
            <div className="desc text-end">
              <p>
                Our hand-picked influencers with strong engagement rate will take
                your campaigns to the next level.
              </p>
              <img
                src="/img/products/influencer_marketing.png"
                alt=""
                width={480}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="features1 px-5">
            <h5 className="mb-5 award">Awarding</h5>
            <div className="desc">
              <p>Awarding is given to brands that successfully carry out digital marketing so that they have a positive impact on the performance of a brand, both by increasing awareness, market share, and increasing customer loyalty.</p>
              <img
                src="/img/products/AWARDING.png"
                alt=""
                width={480}
                className="img-fluid me-4"
              />
              <p>

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimony d-lg-block d-xl-block py-5">
        <h2>Testimonials</h2>
        <p>
          We are happy to share our client’s review
        </p>
      </div>
      <div className="ratings py-5 my-5">
        <div className="rating">
          <p className="txt-rating">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            aliquet elit eu lobortis.
          </p>
          <div className="profile">
            <img className="img-fluid" src="/img/Ellipse 56.svg" alt="" />
            <div className="Name ms-2">
              <p className="name">Jhon Doe</p>
              <p className="profesi">journalist</p>
            </div>
            <div className="stars ms-4 mt-4">
              <img className="img-fluid" src="/img/Frame 451.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="rating">
          <p className="txt-rating">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            aliquet elit eu lobortis.
          </p>
          <div className="profile">
            <img className="img-fluid" src="/img/Ellipse 56.svg" alt="" />
            <div className="Name ms-2">
              <p className="name">Jhon Doe</p>
              <p className="profesi">journalist</p>
            </div>
            <div className="stars ms-4 mt-4">
              <img className="img-fluid" src="/img/Frame 451.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="rating">
          <p className="txt-rating">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            aliquet elit eu lobortis.
          </p>
          <div className="profile">
            <img className="img-fluid" src="/img/Ellipse 56.svg" alt="" />
            <div className="Name ms-2">
              <p className="name">Jhon Doe</p>
              <p className="profesi">journalist</p>
            </div>
            <div className="stars ms-4 mt-4">
              <img className="img-fluid" src="/img/Frame 451.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="clients my-5 px-xl-0 px-2">
        <h2>Our Clients</h2>
        <p>
          Several big company already integrated with our Products & Services
        </p>

        <div className="img-clients my-5 py-4">
          <img
            className="img-fluid"
            src="/img/Screen Shot 2022-07-19 at 12.16 1.svg"
            alt=""
          />
          <img
            className="mx-5 mx-xl-5 img-fluid"
            src="/img/Screen Shot 2022-07-19 at 10.59 1.svg"
            alt=""
          />
          <img className="img-fluid" src="/img/unnamed 2.svg" alt="" />
          <img
            className="img-fluid"
            src="/img/yqsxkpbgszuqbjqfsryz 1.svg"
            alt=""
          />
          <img
            className="img-fluid"
            src="/img/Screen Shot 2022-07-19 at 10.54 1.svg"
            alt=""
          />
        </div>
      </div>

      <div className="contacts">
        <h2 className="mt-5">Contact Us</h2>
        <p>Get your free personalized demo</p>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8">
              <div className="row mt-5">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Full Name</label>
                    <Input
                      className="form-control"
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Email </label>
                    <Input
                      className="form-control"
                      type="email"
                      onChange={handleChange}
                      name="email"
                      value={form.email}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Company Name</label>
                    <Input
                      className="form-control"
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group mt-1">
                    <label className="txt-label">Phone Number</label>
                    <Input
                      className="form-control"
                      type="number"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <label className="txt-label">Notes</label>
              <div className="d-flex flex-direction-column">
                <textarea
                  className="form-control"
                  name="notes"
                  type="text"
                  id=""
                  cols="30"
                  rows="5"
                  value={form.notes}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button onClick={handleContactUs} className="btn-send" type="submit">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="logo-WA float- d-xl-none">
        <a href="">
        <img className="img-fluid fixed-bottom logo-WA" src="/img/WhatsApp-Logo.svg" alt="" width={100} height={100}/>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
