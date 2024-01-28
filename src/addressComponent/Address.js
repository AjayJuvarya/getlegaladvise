import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Address() {
  return (
    <div>
      <div style={{ height: 200, backgroundColor: "grey" }}>
        <div
          style={{
            // flex: 1,
            flexDirection: "row",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              // flex: 1,
              flexDirection: "row",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 45,
                width: 50,
                backgroundColor: "#bbb",
                borderRadius: "50%",
                marginTop: "5%",
                position: "relative",
                left: "4%",
              }}
            >
              <FaLocationDot size={30} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 350,
                height: 120,
                backgroundColor: "lightblue",
                margin: "2%",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Our Address</h4>
                <p>11-5-1,</p>
                <p>Rockdale layout,Waltair,</p>
                <p>Visakhapatnam.</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 45,
                width: 50,
                backgroundColor: "#bbb",
                borderRadius: "50%",
                marginTop: "5%",
                position: "relative",
                left: "4%",
              }}
            >
              <FaPhoneAlt size={30} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 350,
                height: 120,
                backgroundColor: "lightblue",
                margin: "2%",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Phone Number</h4>
                <p>+91-6300101181</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 45,
                width: 50,
                backgroundColor: "#bbb",
                borderRadius: "50%",
                marginTop: "5%",
                position: "relative",
                left: "4%",
              }}
            >
              <MdOutlineEmail size={30} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 350,
                height: 120,
                backgroundColor: "lightblue",
                margin: "2%",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Email Address</h4>
                <p>info@getlegaladvise.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
