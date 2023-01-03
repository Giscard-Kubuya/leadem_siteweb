import React from "react";

function Realisation(props) {
  return (
    <div className={`item item-${props.ind+1}`}>
      <div className="row">
        <figure className="figure-container col-lg-6 col-12">
          <a href="case-study-1.html" target="_blank" />
        </figure>
        <div className="content col-lg-6 col-12">
          <div className="content-inner">
            <h3 className="project-title">
              <a className="text-link" href="case-study-1.html">
                {props.item.titre_realisation}
              </a>
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
            {/*//desc*/}
            <p className="link mb-2">
              <i className="fas fa-briefcase" />{" "}
              <a className="more-link text-link" href="case-study-1.html">
                Read full case study
              </a>
            </p>
            <p className="link">
              <i className="fas fa-external-link-alt" />{" "}
              <a
                className="site-link text-link"
                href="https://themes.3rdwavemedia.com/"
                target="_blank"
              >
                Website link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realisation;
