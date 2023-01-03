import { useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Formation() {
  const [model, base_url_api] = useOutletContext();
  const [formations, setFormations] = useState([]);
  const getFormations = async () => {
    let response = await model.getAllFormations();

    if (response.status === 200) {
      let data = await response.json();
      setFormations(data.data);
    } else {
      setFormations([]);
    }
  };

  useEffect(() => {
    getFormations();
  }, []);
  return (
    <>
      {formations.map((item) => (
        <div className="item col-xl-4 col-md-6 col-12">
          <div className="item-inner rounded">
            <figure className="figure rounded-top">
              <a href="blog-post.html">
                <img
                  className="img-fluid"
                  src={`${base_url_api}/${item.image_formation}`}
                  alt={item.name_formation}
                />
              </a>
            </figure>
            <div className="content-wrapper text-center">
              <h3 className="sub-title">
                <a className="text-link" href="blog-post.html">
                {item.name_formation} 
                </a>
              </h3>
              <div className="desc">
                <p>
                {item.description}. <br/> par <u><em>{item.name_team}</em> </u>
                </p>
              </div>
              {/*//desc*/}
            </div>
            {/*//content-wrapper text-center*/}
          </div>
          {/*//item-inner*/}
        </div>
      ))}
    </>
  );
}

export default Formation;
