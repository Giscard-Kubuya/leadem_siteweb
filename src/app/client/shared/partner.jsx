import React from "react";
import { Link } from "react-router-dom";

function Partner(props) {
  return (
    <li className="col-md-3 col-6">
      <Link to={props.item.link_partner}>
        <img className="img-fluid" src={`${props.base_url_api}/${props.item.image_diapo}`} alt={props.item.name_partner} />
      </Link>
    </li>
  );
}

export default Partner;
