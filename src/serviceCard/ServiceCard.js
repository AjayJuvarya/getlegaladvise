import React from "react";
import "./ServiceCard.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ServiceCard(props) {
  const navigate = useNavigate();

  return (
    <div className="row1">
      <div className="column1">
        <Link to={props.url} className="name">
          <img src={props.image} className="image" />
          <h4 className="name">{props.name}</h4>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
