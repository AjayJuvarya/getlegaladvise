import React from "react";
import "./Footer.css";
import logoImage from "../assets/conquer_legal_solutions.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import { FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

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
          <p
            style={{
              color: "white",
              padding: 10,
              marginLeft: 35,
              display: "flex",
            }}
          >
            Getlegaladvise is a part of conquer legal solutions firm.
          </p>
        </div>
        <div style={{ marginTop: "5%", marginLeft: "35%" }}>
          <FaFacebook color="#316FF6" size={50} style={{ marginLeft: 10 }} />
          <FaInstagramSquare color="red" size={50} style={{ marginLeft: 10 }} />
          <AiFillTwitterCircle
            color="lightblue"
            size={50}
            style={{ marginLeft: 10 }}
          />
        </div>
      </div>
      <h2 style={{ marginLeft: "3%", color: "white", marginTop: 30 }}>
        Disclaimer:
      </h2>
      <p style={{ marginLeft: "3%", color: "white", marginTop: 10 }}>
        This is not a Government run Website and the form is not the actual
        registration form, it is just to collect information from our clients so
        that our expert can easily understand their business or needs. By
        proceeding forward with this website you are aware that we are a private
        company managing this website and providing assistance based on the
        request from our customers and the fee collected in this website is a
        consultancy fee.
      </p>
      <p style={{ textAlign: "center", marginTop: 30, color: "white" }}>
        © 2023 Online Legal Center. All Rights Reserved. Developed by Pingmedia.
      </p>
    </div>
  );
}

export default Footer;
