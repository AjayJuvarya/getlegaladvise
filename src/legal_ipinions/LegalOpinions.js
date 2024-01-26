import React from "react";

function LegalOpinions() {
  return (
    <div>
      <h1 className="textContain">Legal Opinions</h1>
      <hr className="moneydisputesLine" />
      <h2 style={{ marginLeft: "5%", marginTop: 15 }}>
        Are you Buying a property:
      </h2>
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
          Do you know whether the seller has absolute right to sell?
        </a>

        <a href="/fillform">
          Do you know whether there are any disputes pending over the property?
        </a>

        <a href="/fillform">
          Do you know whether the property is free from encumbrances?
        </a>
      </div>
      <h2 style={{ marginLeft: "5%", marginTop: 15 }}>
        Why you should obtain Legal Opinion Before purchasing property:
      </h2>
      <p style={{ marginLeft: "5%", marginTop: 15, lineHeight: 1.5 }}>
        In our country there is no integrated system to furnish detailed
        information about a Land parcel or building. Records relating to
        property are maintained by different departments like Municipal.
        Revenue, Stamps and Registration etc., and there is not system to check
        disputes over the property. Besides above there are many tricks to hide
        encumbrances over the property and sell the property again and again. If
        you purchase a property without obtaining Legal opinion, you may lose
        your hard-earned money besides facing Civil or Criminal disputes in
        Courts for a long duration. No need of repeated visits to the Govt
        offices and office of legal counsel for Legal Opinion
      </p>
      <h2 style={{ marginLeft: "5%", marginTop: 15, lineHeight: 1.5 }}>
        Here we are:
      </h2>
      <p style={{ marginLeft: "5%", marginTop: 15, lineHeight: 1.5 }}>
        You can obtain a detailed trustworthy legal opinion online over the
        property by submitting document online.
      </p>
      <p style={{ marginLeft: "5%", marginTop: 15, lineHeight: 1.5 }}>
        If you are buying a Plot, Flat, Building, Vacant Land, agricultural Land
        within the State of Andhrapradesh, we can provide a detailed Legal
        opinion basing on the documents supplied by you and if necessary, by
        obtaining documents from various Govt., authorities to verify and
        ascertain title to the property.
      </p>
      <h2 style={{ marginLeft: "5%", marginTop: 15, lineHeight: 1.5 }}>
        Steps to Follow:
      </h2>
      <p style={{ marginLeft: "5%", marginTop: 15, lineHeight: 1.5 }}>
        Scan the property documents in PDF Format and send to the email Id-
        buddha@getleagladvise.com after sending documents you will receive an
        acknowledgment and request for payment of fees. After receiving fees, we
        will verify the documents. Then we will contact you for any further
        information and feedback, after finishing Legal opinion the soft copy
        with signature of concerned Advocate will be sent to you by mail or hard
        copy will be sent by post to you desired address at your option.{" "}
      </p>
    </div>
  );
}

export default LegalOpinions;
