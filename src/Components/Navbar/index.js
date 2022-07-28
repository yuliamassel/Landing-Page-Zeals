import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import * as BsIcons from "react-icons/gi";
import "../Components.css";
import Modal from "../Modal";

const Navbar = () => {

  const [openModal, setOpenModal]= useState()

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
      <BsIcons.GiHamburgerMenu className="me-2 d-lg-none d-xl-none" size={28} onClick={()=>{setOpenModal(true)}}/>
        {openModal && <Modal className="Tabs" closeModal={setOpenModal}>kakakak</Modal>}
      </div>
    </div>
  );
};

export default Navbar;
