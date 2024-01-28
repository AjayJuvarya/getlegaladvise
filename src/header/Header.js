import React from "react";
import "./Header.css";
import NavLinks from "../NavLinks/NavLinks";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../assets/conquer_legal_solutions.png";

function Header() {
  return (
    <div className="mainContainer">
      <div
        style={{
          backgroundColor: "red",
          width: "100%",
          height: 40,
          display: "flex",
        }}
      >
        <FaPhoneAlt style={{ marginTop: 10, marginLeft: "10%" }} />
        <h5 style={{ marginTop: 10, marginLeft: "1%" }}>+91-6300101181</h5>
        <MdOutlineEmail style={{ marginTop: 10, marginLeft: "10%" }} />
        <h5 style={{ marginTop: 10, marginLeft: "1%" }}>
          info@getlegaladvise.com
        </h5>
      </div>
      <div className="logoContainer">
        <img
          src={logo}
          height={100}
          width={350}
          style={{ marginTop: 10, position: "absolute" }}
        />
        <h2 className="logoName">Getlegaladvise</h2>
        <NavLinks />
      </div>
    </div>
  );
}

export default Header;
