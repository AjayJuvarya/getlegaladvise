import React, { useState } from "react";
import "./Form.css";
import fillformImage from "../assets/fillformImage.gif";
import axios from "axios";

function Form() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    emailid: "",
    city: "",
    state: "",
    service: "",
    comments: "",
  });
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Subject");
  const [message, setMessage] = useState();
  console.log("email", email);
  console.log("Subject", subject);
  console.log("message", message);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
    setMessage(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get("http://localhost:5000/sendform", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        alert("Success");
      })
      .then((response) => console.log("response", response))
      .catch(() => {
        alert("Failure");
      });
  };

  return (
    <div style={{ marginLeft: "7%", marginTop: 15 }}>
      <h1>Get In Touch</h1>
      <div
        style={{
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            marginTop: "3%",
          }}
        >
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="formContainer"
              onChange={handleChange}
            />

            <label>Phone Number:</label>
            <input
              type="phone"
              name="phone"
              className="formContainer"
              onChange={handleChange}
            />

            <label>Email ID:</label>
            <input
              type="text"
              name="emailid"
              className="formContainer"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>City:</label>
            <input
              type="text"
              name="city"
              className="formContainer"
              onChange={handleChange}
            />

            <label>State:</label>
            <input
              type="text"
              name="state"
              className="formContainer"
              onChange={handleChange}
            />

            <label>Required service:</label>
            <input
              type="textarea"
              name="service"
              className="formContainer"
              onChange={handleChange}
            />

            <label>Comments or Message</label>
            <textarea
              name="comments"
              rows={10}
              cols={90}
              //   style={{ width: "25%" }}
              onChange={handleChange}
            />
            <button
              style={{
                width: "30%",
                marginTop: 20,
                height: 40,
                marginLeft: "30%",
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <img
            src={fillformImage}
            width={400}
            height={400}
            style={{ marginLeft: "35%", marginTop: "10%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
