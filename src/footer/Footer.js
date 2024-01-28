import React from "react";
import "./Footer.css";
import logoImage from "../assets/conquer_legal_solutions.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import { FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import Privacy from "../Privacy.js";
function Footer() {
  return (
    <div className="footerContainer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <img
            src={logoImage}
            width={300}
            height={70}
            style={{ marginTop: 10 }}
          />
          <h5
            style={{
              color: "white",

              marginLeft: 35,
              display: "flex",
            }}
          >
            Getlegaladvise is a part of conquer legal solutions firm.
          </h5>
        </div>
      </div>
      <h2 style={{ marginLeft: "3%", color: "white", marginTop: 30 }}>
        Disclaimer:
      </h2>
      <p
        style={{
          marginLeft: "3%",
          color: "white",
          marginTop: 10,
          fontSize: 14,
          marginRight: "3%",
        }}
      >
        This is not a Government run Website and the form is not the actual
        registration form, it is just to collect information from our clients so
        that our expert can easily understand their business or needs. By
        proceeding forward with this website you are aware that we are a private
        company managing this website and providing assistance based on the
        request from our customers and the fee collected in this website is a
        consultancy fee.
      </p>
      <div style={{ marginTop: "2%", marginLeft: "2%" }}>
        <h5 style={{ marginBottom: 2, marginLeft: 10 }}>Follow Us</h5>
        <FaFacebook color="#316FF6" size={30} style={{ marginLeft: 10 }} />
        <FaInstagramSquare color="red" size={30} style={{ marginLeft: 10 }} />
        <AiFillTwitterCircle
          color="lightblue"
          size={30}
          style={{ marginLeft: 10 }}
        />
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: 10,
          color: "white",
          marginTop: "2%",
          fontSize: 15,
        }}
      >
        © 2023 get legal advise. All Rights Reserved. Developed by ajay.
      </p>

      <div
        style={{
          // textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginTop: 5,
          fontSize: 15,
        }}
      >
        <a href="/privacy-policy" className="privacy">
          Privacy Policy
        </a>
        <a href="/terms-and-condtions" className="privacy">
          Terms And Conditions
        </a>
      </div>
    </div>
  );
}

export default Footer;
