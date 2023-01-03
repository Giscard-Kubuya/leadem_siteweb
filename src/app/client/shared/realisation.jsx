import React from "react";
import { Link } from "react-router-dom";

function Realisation(props) {
  return (
    <div className={`item item-${props.ind}`}>
      <div className="row">
        <figure className="figure-container col-lg-6 col-12">
          <a className="img-link"  target="_blank" />
        </figure>
        <div className="content col-lg-6 col-12">
          <div className="content-inner">
            <h3 className="project-title">
              <Link className="text-link" to="case-study-1.html">
                {props.item.titre_realisation}

              </Link>
            </h3>
            <ul className="meta list-unstyled">
              <li>
                <strong className="me-1">Client:</strong> {props.item.name_client}
              </li>
              <li>
                <strong className="me-1">What we did:</strong> {props.item.work_realisation}
              </li>
            </ul>
            {/*//meta*/}
            <div className="desc">
              <p>
              {props.item.description}
              </p>
            </div>
          </div>
          {/*//content-inner*/}
        </div>
        {/*//content*/}
      </div>
      {/*//row*/}
    </div>
  );
}

export default Realisation;
