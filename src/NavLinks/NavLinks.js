import React from "react";
import "./NavLinks.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="mainContainer">
      <div className="linksContainer">
        <Link to="/" className="home">
          Home
        </Link>
        {/* <Link to="/about" className="about">
          About Us
        </Link> */}
        <Link to="services" className="services">
          Services
        </Link>
      </div>
      {/* <div className="iconsContainer">
        <FaFacebookF color="white" className="icons" />
        <FaTwitter color="white" className="icons" />
        <FaInstagramSquare color="white" className="icons" />
      </div> */}
    </div>
  );
}

export default NavLinks;
