import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import "./LandingPage.css";

const LandingPage = () => {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        notes: ""
      });
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventdefault()
      }

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
          <h3>Join Us Now!</h3>
          <h1>
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
          <h3>Join Us Now!</h3>
          <h1>
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
          <h3>Join Us Now!</h3>
          <h1>
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
          <h3>Join Us Now!</h3>
          <h1>
            World #1 <br /> Digital Marketing <br /> Platform
          </h1>
          <Button className="btn-join mt-2">Join Us</Button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <div className="carousel">
        <img
          className="mt-5 img-fluid img-slide"
          src="/img/Business_team_looking_for_new_people_1-removebg-preview.png"
          alt=""
        />
        <div className="first-slide">
          <h3>Join Us Now!</h3>
          <h1>
            World #1 <br /> Digital Marketing <br /> Platform
          </h1>
          <Button className="btn-join mt-2">Join Us</Button>
        </div>
      </div> */}
      <div className="our-product py-5">
        <h2>Our Product</h2>
        <p className="mx-5 px-5">
          Integrated Digital Marketing Ecosystem that helps you connect with
          your audience. <br /> Aliquam erat volutpat. Nunc vitae pharetra
          ipsum. Morbi ac aliquet risus.
        </p>
      </div>
      <div className="features mb-5">
        <div className="features1 px-5">
          <h5 className="mb-5 ms-5">Affiliate Marketing Platform</h5>
          <div className="desc">
            <img
              src="/img/Business team looking for new people 5.svg"
              alt=""
              width={480}
              className="img-fluid me-4"
            />
            <p>
              Zeals Affiliate marketing are those who are socially <br /> active
              and are connected to your targeted real-person <br /> that will
              share Zeals ‘unique link’ to enhance exposure <br /> and
              conversion at the same time.
            </p>
          </div>
        </div>
        <div className="features1 px-5 my-5">
          <h5 className="mb-5 ms-3">Online to Offline Voucher</h5>
          <div className="desc text-end">
            <p>
              Our online-to-offline system enables you to create an actionable
              and measurable campaign at the same time, <br /> in one single
              platform through specifically generated <br /> QR for your
              campaign.
            </p>
            <img
              src="/img/Business team looking for new people 5.svg"
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
              src="/img/Business team looking for new people 5.svg"
              alt=""
              width={480}
              className="img-fluid me-4"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially
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
              src="/img/Business team looking for new people 5.svg"
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
              src="/img/Business team looking for new people 5.svg"
              alt=""
              width={480}
              className="img-fluid me-4"
            />
            <p>
              With Social Media Listening you will get hearing ability and
              strategic action by tracking online conversations related to your
              brand and industry to help you develop an effective solution that
              perfectly fits into your customer needs.
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
              src="/img/Business team looking for new people 5.svg"
              alt=""
              width={480}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="features1 px-5">
          <h5 className="mb-5 award">Awarding</h5>
          <div className="desc">
            <img
              src="/img/Business team looking for new people 5.svg"
              alt=""
              width={480}
              className="img-fluid me-4"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially
            </p>
          </div>
        </div>
      </div>
      <div className="testimony mb-5">
        <h2>Testimonials</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
          aliquet elit eu lobortis. Aliquam erat <br /> volutpat. Nunc vitae
          pharetra ipsum. Morbi ac aliquet risus.
        </p>
      </div>
      <div className="ratings">
        <div className="rating">
        <p className="txt-rating">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            aliquet elit eu lobortis.
          </p>
          <div className="profile">
            <img className="img-fluid"  src="/img/Ellipse 56.svg" alt="" />
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
          <div  className="profile">
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
      <div className="clients mt-5">
        <h2>Our Clients</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
          aliquet elit eu lobortis. Aliquam erat <br /> volutpat. Nunc vitae pharetra
          ipsum. Morbi ac aliquet risus.
        </p>
        <div className="img-clients">
          <img className="img-fluid" src="/img/Screen Shot 2022-07-19 at 12.16 1.svg" alt="" />
          <img className="mx-5 mx-xl-5 img-fluid" src="/img/Screen Shot 2022-07-19 at 10.59 1.svg" alt="" />
          <img className="img-fluid" src="/img/unnamed 2.svg" alt="" />
          <img className="img-fluid" src="/img/yqsxkpbgszuqbjqfsryz 1.svg" alt="" />
          <img className="img-fluid" src="/img/Screen Shot 2022-07-19 at 10.54 1.svg" alt="" />
        </div>
      </div>
      <div className="contacts">
        <h2>Contact Us</h2>
        <p>Get your free personalized demo</p>
        <form onSubmit={handleSubmit}>
        <div className="input-group mt-5">
            <div className="input-right">
        <label className="txt-label">
               Full Name 
              </label>
              <Input
                className="input"
                type="text"
                name='fullName'
                value={form.fullName}
                onChange={handleChange}
              />
              
        <label className="txt-label">Email </label>
              <Input
                className="input"
                type="email"
                onChange={handleChange}
                name="email"
                value={form.email}
              />
              
              </div>
              <div className="input-left ms-3">
              <label className="txt-label">
               Company Name 
              </label>
              <Input
                className="input"
                type="text"
                name='companyName'
                value={form.companyName}
                onChange={handleChange}
              />
                      <label className="txt-label">
               Phone Number 
              </label>
              <Input
                className="input"
                type="text"
                name='phoneNumber'
                value={form.phoneNumber}
                onChange={handleChange}
              />
              </div>
        </div>
              <label className="txt-label">Notes</label>
        <div className="d-flex flex-direction-column">
              <textarea className="notes" name="" id="" cols="30" rows="10"></textarea>
              </div>
              <Button className="btn-send">Send</Button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
