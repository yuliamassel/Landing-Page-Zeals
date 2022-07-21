import React from "react";
import { Nav } from "react-bootstrap";
import "../Components.css";

const Navbar = () => {
  return (
    <div className="navbar px-4">
        <div className="logo">
          <img src="/img/image 1.svg" alt="" width={160}/>
        </div>
        <div className="tabs">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link className="px-3" href="">Product</Nav.Link>
        <Nav.Link href="">Testimony</Nav.Link>
        <Nav.Link className="px-3" href="">Our Clients</Nav.Link>
        <Nav.Link href="">Contact Us</Nav.Link>
        </div>
      </div>
  );
};

export default Navbar;
