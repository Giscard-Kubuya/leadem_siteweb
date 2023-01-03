import Menu from "./menu";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function Header(props) {
  const [model, base_url_api] = useOutletContext();
  const [diapos, setDiapos] = useState([]);

  const getDiapos = async () => {
    let response = await model.getAllDiapos();

    if (response.status === 200) {
      let data = await response.json();
      setDiapos(data.data);
      console.log(data.data);
    } else {
      setDiapos([]);
    }
  };

  useEffect(() => {
    getDiapos();
  }, []);

  if (props.is_home === true) {
    return (
      <div className="header-wrapper header-wrapper-home">
        {/* ******HEADER****** */}
        <Menu />
        {/* {props.type=='is_home'? */}
        <div className="bg-carousel-wrapper">
          <div
            id="bg-carousel"
            className="bg-carousel carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval={6000}
          >
            <div className="carousel-inner">
              {diapos.map((item, index) => (
                <div
                  key={index + 1}
                  style={{
                    background: `#65758e url("${base_url_api}/${item.image_diapo}") no-repeat 50% top`,
                  }}
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  } slide-dynamic slide slide-${index + 1}`}
                />
              ))}
              {/* <div style={{background: `#65758e url("../images/background/promo-background-2.jpg") no-repeat 50% top;`}} className="carousel-item active slide-dynamic slide-1" />
              <div className="carousel-item slide-dynamic slide-2" />
              <div className="carousel-item slide-dynamic slide-3" /> */}
            </div>
          </div>
          {/*//bg-carousel*/}
        </div>
        {diapos.length > 0 ? (
          <section id="home-promo" className="home-promo section">
            <div className="container text-center">
              <h2 className="title">
                <span className="upper">{diapos[0].title_diapo}</span>
                <span className="middle">{diapos[0].subtitle_diapo}</span>
                <span className="bottom">{diapos[0].description}</span>
              </h2>
              {/* <button
                className="btn btn-cta btn-cta-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-contact"
                data-bs-backdrop="static"
              >
                Talk to us
              </button> */}
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (<div className="header-wrapper header-wrapper-work">
      <Menu />
      <section className="promo section">
        {diapos.length > props.position ? (
        <div className="container text-center">
          <h2 className="title">{diapos[props.position].title_diapo}</h2>
          <p className="intro">
          {diapos[props.position].title_diapo}
          </p>
        </div>
          ):''}
      </section>
    </div>)
  }
}

export default Header;
