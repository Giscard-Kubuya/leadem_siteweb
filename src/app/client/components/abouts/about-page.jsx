import Chat from "../../shared/chat";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function AboutPage() {
  const [model, base_url_api] = useOutletContext();
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    let response = await model.getAllTeams();

    if (response.status === 200) {
      let data = await response.json();
      setTeams(data.data);
    } else {
      setTeams([]);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <Header position={2} />

      <section id="team" className="team section">
        <div className="container">
          <h2 className="title text-center">LEADEM AFRICA CONSULTING</h2>
          <p className="intro text-center">
            Nos services sont repartis dans plusieurs departements,alors voice
            quelques services et si vous voulez en savoir plus,nos contacts sont
            à vos portées
          </p>
          <h2 className="title text-center">Trouvez ici notre équipe</h2>
          <div className="row">
            {teams.map((item, index) => (
              <div key={index+1} className="item col-lg-6 col-12">
                <div className="item-inner">
                  <div className="row">
                    <figure className="figure col-auto">
                      <img
                        className="member-profile rounded"
                        src={`${base_url_api}/${item.image_team}`}
                        alt={item.name_team}
                      />
                    </figure>
                    <div className="info col">
                      <h3 className="name">{item.name_team}</h3>
                      <h4 className="role">{item.name_position}</h4>
                      <p>
                      {item.description}
                      </p>
                      {/* <div className="social">
                      <ul className="social-list list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-github-alt" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*//row*/}
        </div>
        {/*//container*/}
      </section>

      <Chat />
      <Footer />
    </div>
  );
}

export default AboutPage;
