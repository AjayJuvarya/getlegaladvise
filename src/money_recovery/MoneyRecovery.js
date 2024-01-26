import React from "react";
import { Outlet } from "react-router-dom";
import ServiceCard from "../serviceCard/ServiceCard";
import "./Style.css";

function MoneyRecovery(props) {
  return (
    <div>
      <h1 className="textContain">Money Disputes</h1>
      <hr className="moneydisputesLine" />
      {/* <ul className="ulContain"> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.8,
          marginLeft: "5%",
          marginTop: 15,
        }}
      >
        <a href="/fillform">Money recovery from the Borrower</a>
        <a href="/fillform">Money recovery from Mortgage</a>
        <a href="/fillform">Money recovery from chit funds</a>
        <a href="/fillform">Money recovery from Mutual Funds</a>
        <a href="/fillform">Money Recovery from Insurance Companies</a>
        <a href="/fillform">Money Recovery from Employer</a>
        <a href="/fillform">
          Money recovery from seller of property who failed to register property
        </a>
        <a href="/fillform">
          Money recovery from persons who issued cheques in your favour
        </a>
        <a href="/fillform">Money recovery through Damages</a>
        <a href="/fillform">Mondy recovery from Govt., agencies </a>
        <a href="/fillform">Money recovery from unfulfilled agreements </a>
        <h5>or</h5>
        <a href="/fillform">How to defend a false claim for money</a>{" "}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default MoneyRecovery;
