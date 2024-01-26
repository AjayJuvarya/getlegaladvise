import React from "react";
import "./Header.css";
import NavLinks from "../NavLinks/NavLinks";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

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
        <h2 className="logoName">Getlegaladvise</h2>
        <NavLinks />
      </div>
    </div>
  );
}

export default Header;
