import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import "./Services.css";
import money_recovery_image from "../assets/money_recovery_image.gif";
import family_disputes from "../assets/family_disputes.jpg";
import domestic_violence from "../assets/domestic_vilence.jpg";
import succession_to_property from "../assets/succession_to_property.jpg";
import partion_issues from "../assets/property_issues.jpg";
import land_record_and_title_search from "../assets/land_record_and _title_search.jpg";
import agreements from "../assets/Agreements.jpg";
import drafting_of_documents from "../assets/drafting_of_deeds_documentation.jpg";
import legal_opinions from "../assets/legal_opinions.jpg";

function Services() {
  return (
    <div className="servContainer">
      <div className="textContainer">
        <h1>Services</h1>
        <hr className="line" />
        <h4 className="textdesc">
          We will provide legal advise in Telugu and English language in
          following categories.
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          marginRight: "auto",
          marginLeft: "auto",
          display: "block",
        }}
      >
        <div className="row">
          <div className="column">
            <ServiceCard
              image={money_recovery_image}
              name="Money Disputes"
              url="/services/moneyrecovery"
            />
          </div>
          <div className="column">
            <ServiceCard
              image={family_disputes}
              name="Property Disputes"
              url="/services/familydisputes"
            />
          </div>
          <div className="column">
            <ServiceCard
              image={domestic_violence}
              name="Family Disputes"
              url="/services/domesticviolence"
            />
          </div>
          <div className="column">
            <ServiceCard
              image={land_record_and_title_search}
              name="Land Records and Title Search"
              url="landrecords"
            />
          </div>
          <div className="column">
            <ServiceCard
              image={succession_to_property}
              name="Criminal Cases"
              url="/services/successiontoproperty"
            />
          </div>
          <div className="column">
            <ServiceCard
              image={legal_opinions}
              name="Legal Opinions"
              url="legalopinions"
            />
          </div>
          <div className="column">
            <ServiceCard
              image={drafting_of_documents}
              name="Drafting of Deeds and Documents"
              url="draftingdocuments"
            />
          </div>
          <div className="column">
            <ServiceCard
              image={partion_issues}
              name="Succession and Inheritance to Property"
              url="partionissues"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
