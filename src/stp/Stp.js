import React from "react";

function Stp() {
  return (
    <div>
      <h1 className="textContain">Criminal Cases</h1>
      <hr className="moneydisputesLine" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.8,
          marginLeft: "5%",
          marginTop: 15,
        }}
      >
        <a href="/fillform">Which disputed come under Criminal cases</a>
        <a href="/fillform">How to lodge a Police complaint </a>{" "}
        <a href="/fillform">Assistance for drafting Police Complaint</a>
        <a href="/fillform">How to defend a Criminal Case</a>{" "}
        <a href="/fillform">What to do if Police not registering case </a>
        <a href="/fillform">
          How to lodge complaint to higher authorities
        </a>{" "}
        <a href="/fillform">
          How to file a Criminal Private Complaint in Court
        </a>
        <a href="/fillform">Which criminal cases requires Bail from Court</a>
        <a href="/fillform">
          Which Criminal cases Bail can be granted in Police Station
        </a>{" "}
        <a href="/fillform">Any other Advice related to Criminal Cases.</a>{" "}
      </div>
    </div>
  );
}

export default Stp;
