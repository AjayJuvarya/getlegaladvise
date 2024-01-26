import React from "react";

function DraftingDocuments() {
  return (
    <div>
      <h1 className="textContain">Drafting of Deeds and Documentation</h1>
      <hr className="moneydisputesLine" />
      <h2 style={{ marginLeft: "5%", marginTop: 15 }}>Steps to Follow:</h2>
      <p style={{ marginLeft: "5%", marginTop: 5 }}>
        Mention the kind of draft you required{" "}
      </p>
      <p style={{ marginLeft: "5%", marginTop: 5 }}>Scan your documents </p>
      <p style={{ marginLeft: "5%", marginTop: 5 }}>
        send required documents to mail id.{" "}
      </p>
      <p style={{ marginLeft: "5%", marginTop: 5 }}>
        Get your deed in your mail or whatsApp.
      </p>
      <h3 style={{ marginLeft: "5%", marginTop: 20 }}>
        Get drafting of documents at your door step:
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.8,
          marginLeft: "5%",
          marginTop: 15,
        }}
      >
        <a href="">Rental Agreements</a>
        <a href="">Will </a> <a href="">Gift</a>
        <a href="">Sale Deed </a> <a href="">Development Agreement </a>
        <a href="">Construction Agreement</a>{" "}
        <a href="">Agreement for sale of Property</a>
        <a href="">Partition Deed </a>
        <a href="">Settlement Deed </a> <a href="">Conveyance deed </a>{" "}
        <a href="">Disputes over legitimacy of child </a>
        <a href="">Registration of Marriage </a>
      </div>
    </div>
  );
}

export default DraftingDocuments;
