import React from "react";

function Temoignage({ item }) {
  return (
    <div>
      <div className="item col-lg-6 col-12 px-5">
        <div className="item-inner">
          <div className="quote-container">
            <i className="fas fa-quote-left" />
            <blockquote className="quote">
              {item.description}.
            </blockquote>
          </div>
          <div className="meta row">
            <div className="profile col-8">
              <img src="assets/images/client/client-profile-1.png" alt />
              <p className="name">
              {item.name_temoin}
                <br />
                <span className="source-title">{item.profile_temoin}</span>
              </p>
            </div>
            <div className="client-logo col align-self-center">
              <img src="assets/images/client/client-logo-1.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temoignage;
