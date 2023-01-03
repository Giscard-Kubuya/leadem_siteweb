import Topmenu from "./menus/topmenu";

function HeaderPage(props) {

  return (
    <div>
      <div className="header-wrapper header-wrapper-home">
        <Topmenu/>
        <div className="bg-carousel-wrapper">
          <div
            id="bg-carousel"
            className="bg-carousel carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval={6000}
          >
            <div className="carousel-inner">
              {props.diapos.map((item,index)=>( 
                
                <div key={index+1} style={{background:`#65758e url("${props.base_url}/${item.image_diapo}") no-repeat 50% top`}} className={`carousel-item ${index===0?'active':''} slide-dynamic slide slide-${index+1}`} />

              ))}

            </div>
          </div>
        </div>
        {props.diapos.length>0?
        <section id="home-promo" className="home-promo section">
          <div className="container text-center">
            <h2 className="title">
              <span className="upper">{props.diapos[0].title_diapo}</span>
              <span className="middle">{props.diapos[0].subtitle_diapo}</span>
              <span className="bottom">{props.diapos[0].description}</span>
            </h2>
            <button
              className="btn btn-cta btn-cta-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modal-contact"
              data-bs-backdrop="static"
            >
              Talk to us
            </button>
          </div>
        </section>
        :''}
      </div>
    </div>
  );
}

export default HeaderPage;
