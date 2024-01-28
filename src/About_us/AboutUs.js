import React from "react";
import Person_1 from "../assets/SA_Naidu.jpg";
import "./About.css";
import Person_2 from "../assets/shanmukh_rao.jpg";
import Person_3 from "../assets/Krishna_rao.jpg";
import Person_4 from "../assets/sridevi_advocate.jpg";
import legal_service from "../assets/legal_service.png";

function AboutUs() {
  return (
    <div className="aboutContainer">
      <h2 className="h_2">Our Associates</h2>
      <div className="aboutContainer">
        <div className="card1">
          <img src={Person_3} className="person_1" />
          <div className="aboutPersonCard1">
            <h3 className="personName1">Buddha Krishna Rao</h3>
            <p className="aboutPerson1">
              Practicing as an Advocate. 23 years rich experience in land Laws,
              Property disputes, property title search, and legal opinions on
              property issues.
            </p>
          </div>
        </div>
        <div className="card1">
          <div className="aboutPersonCard2">
            <h3 className="personName1">S.A Naidu</h3>
            <p className="aboutPerson1">
              Practicing Advocate for more than 20 years in Civil and Criminal
              side
            </p>
          </div>
          <img src={Person_1} className="person_2" />
        </div>
        <div className="card1">
          <img src={Person_2} className="person_3" />
          <div className="aboutPersonCard3">
            <h3 className="personName1">Shanmukh Rao</h3>
            <p className="aboutPerson1">
              Practicing Advocate since year 2000 in High Court of Andhrapradesh
              now in High Court of Telangana. Beside property disputes, expert
              in Chitfund, Labour Laws, Municipal Laws.
            </p>
          </div>
        </div>
        <div className="card1">
          <div className="aboutPersonCard2">
            <h3 className="personName1">Smt D.Sridevi</h3>
            <p className="aboutPerson1">
              Top Criminal Advocate with more then 20 years of experience in all
              kinds criminal cases including cases under NDPS Act, POSCO Art, SC
              & ST Act.
            </p>
          </div>
          <img src={Person_4} className="person_2" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
