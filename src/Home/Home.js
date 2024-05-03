import React from "react";
import Home_image from "../assets/Home_Image.jpg";
import "./Home.css";
import Footer from "../footer/Footer";
import AboutUs from "../About_us/AboutUs";
import Address from "../addressComponent/Address";
import GoogleAds from "../adsense/GoogleAds";

function Home() {
  return (
    <div>
      <div className="bg"></div>
      <div className="textonImageContainer">
        <h1 className="text">Get the best</h1>
        <h1 className="text">legal advise online</h1>
        <h1 className="text">from any where, at affordable price</h1>
        <h1 className="text">we ensure trust and confidentiality...</h1>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Address />
      </div>
      <Footer />
      <GoogleAds />
    </div>
  );
}

export default Home;
