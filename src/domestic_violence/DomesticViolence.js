import React from "react";

function DomesticViolence() {
  return (
    <div>
      <h1 className="textContain">Family Disputes</h1>
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
        <a href="/fillform">Disputes between wife and Husband</a>
        <a href="/fillform">Disputes relating to Divorce</a>{" "}
        <a href="/fillform">Disputes relating to Maintenance</a>
        <a href="/fillform">Disputes relating to Custody of Child </a>{" "}
        <a href="/fillform">Disputes relating to Domestic Violence</a>
        <a href="/fillform">Disputes relating to Dowry </a>{" "}
        <a href="/fillform">Disputes relating to 2nd marriage</a>
        <a href="/fillform">Disputes with in-laws and other family members </a>
        <a href="/fillform">Disputes over recovery of Dowry amount </a>{" "}
        <a href="/fillform">Disputes Between two wives </a>{" "}
        <a href="/fillform">Disputes over legitimacy of child </a>
        <a href="/fillform">Registration of Marriage </a>
      </div>
    </div>
  );
}

export default DomesticViolence;
