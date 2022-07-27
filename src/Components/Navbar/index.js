import React from "react";
import { Nav } from "react-bootstrap";
import "../Components.css";

const Navbar = () => {
  return (
    <div className="navbar px-xl-5 px-2">
      <div className="logo">
        <img src="/img/image 1.svg" alt="" width={180} />
      </div>
      <div className="d-none d-xl-block">
        <div className="tabs">
          <Nav.Link className="nav-list" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="px-3 nav-list" href="">
            Product
          </Nav.Link>
          <Nav.Link className="nav-list" href="">
            Testimony
          </Nav.Link>
          <Nav.Link className="px-3 nav-list" href="">
            Our Clients
          </Nav.Link>
          <Nav.Link className="nav-list" href="">
            Contact Us
          </Nav.Link>
        </div>
      </div>
      <div>
        <button
          className="toggle-btn d-xl-none d-md-block"
          id="toggle"
        ></button>
      </div>
    </div>
  );
};

export default Navbar;
