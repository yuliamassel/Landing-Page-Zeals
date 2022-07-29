import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../Components.css";

const Navbar = () => {

  const [state, setState] = useState(false)

  const toggle = () =>{
    setState(!state)
  }

  return (
    <div className="navbar px-xl-5 px-2 fixed-top">
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
        {/* <button
        onClick={toggle}
          className={"toggle-btn d-xl-none d-md-block" + ( state ? "active" : "")}
          id="toggle"
        ></button> */}
        <button onClick={toggle} className="hamburger hamburger--boring d-xl-none" type="button">
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>
      </div>
      {state ?  <div className="tabs-down">
      <Nav.Link className="nav-down" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-down" href="/">
            Product
          </Nav.Link>
          <Nav.Link className="nav-down" href="/">
            Testimony
          </Nav.Link>
          <Nav.Link className="nav-down" href="/">
            Our Clients
          </Nav.Link>
          <Nav.Link className="nav-down" href="/">
            Contact
          </Nav.Link>
      </div>:""}    
    </div>
  );
};

export default Navbar;
