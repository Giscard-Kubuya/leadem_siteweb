import React from "react";

function Service({ item }) {
  return (
    <div className="item col-xl-3 col-md-6 col-12">
      <div className="item-inner rounded">
        <div className="header-box rounded-top">
          <i
            className={`fas fa-${item.icon_service} mb-2`}
            style={{ fontSize: "25px" }}
          />
        </div>
        <div className="desc">
          <h3 className="sub-title">{item.title_service}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
