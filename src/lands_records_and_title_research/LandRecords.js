import React from "react";

function LandRecords() {
  return (
    <div>
      <h1 className="textContain">Land Records and Title Search</h1>
      <hr className="moneydisputesLine" />
      <h2 style={{ marginLeft: "5%", marginTop: 15 }}>We Will Assist:</h2>
      <p style={{ marginLeft: "5%", marginTop: 15 }}>
        We can secure records from concerned offices officially and find out
        your property and find out correct survey number and Patta number of
        properties within Visakhapatnam, Vizianagaram and Srikakulam, Anakappli,
        ASR Districts.{" "}
      </p>
      <h2 style={{ marginLeft: "5%", marginTop: 15 }}>Steps to Follow:</h2>
      <p style={{ marginLeft: "5%", marginTop: 15 }}>
        Tell us what kind of service you required Furnish the information
        whatever you have We do the rest of job.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.8,
          marginLeft: "5%",
          marginTop: 15,
        }}
      >
        <a href="/fillform">
          Are you not able to locate your plot/piece of land purchased long back
        </a>
        <a href="/fillform">
          Are you unable to find out Original Title of property
        </a>{" "}
        <a href="/fillform">
          Are you not able to find our correct survey number of Plot
        </a>
        <a href="/fillform">
          Do you require Revenue Record relating to Property{" "}
        </a>{" "}
        <a href="/fillform">
          Do you require Municipal Record for your property
        </a>
      </div>
    </div>
  );
}

export default LandRecords;
