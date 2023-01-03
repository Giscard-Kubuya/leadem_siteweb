import Formation from "../../shared/formation";
import Config from "../../shared/config";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Partner from "../../shared/partner";
import Service from "../../shared/service";
import Temoignage from "../../shared/temoignage";
import { useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Realisation from "../../shared/realisation";
import Chat from "../../shared/chat";

function HomePage() {
  const [model, base_url_api] = useOutletContext();
  const [services, setServices] = useState([]);
  const [realisations, setRealisations] = useState([]);
  const [temoignages, setTemoignages] = useState([]);
  const [partners, setPartners] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const getAddresses = async () => {
    let response = await model.getAllAddresses();

    if (response.status === 200) {
      let data = await response.json();
      setAddresses(data.data);
    } else {
      setAddresses([]);
    }
  };

  const getServices = async () => {
    let response = await model.getAllServices();

    if (response.status === 200) {
      let data = await response.json();
      setServices(data.data);
    } else {
      setServices([]);
    }
  };

  const getRealisations = async () => {
    let response = await model.getAllRealisations();

    if (response.status === 200) {
      let data = await response.json();
      setRealisations(data.data);
    } else {
      setRealisations([]);
    }
  };

  const getTemoignages = async () => {
    let response = await model.getAllTemoignages();

    if (response.status === 200) {
      let data = await response.json();
      setTemoignages(data.data);
    } else {
      setTemoignages([]);
    }
  };

  const getPartners = async () => {
    let response = await model.getAllPartners();

    if (response.status === 200) {
      let data = await response.json();
      setPartners(data.data);
    } else {
      setPartners([]);
    }
  };

  useEffect(() => {
    getPartners();
    getTemoignages();
    getRealisations();
    getServices();
  }, []);

  return (
    <div>
      <Header is_home={true} />

      {/*//header-wrapper*/}
      {/* ******Why Section****** */}
      <section id="who" className="who section">
        <div className="container text-center">
          <h2 className="title text-center">Qui sommes-nous?</h2>
          <p className="intro text-center">
            LEADEM est une entreprise de consultance informatique,son existance
            est traduite au travers les services en développement des
            applications de toute nature,réseaux
            d'entreprise,cybersecurité,internet des objects mais aussi en
            électronique.
          </p>
          <div className="row benefits text-center">
            {services.map((item, index) => (
              <Service
                key={parseInt(item.id_service) + index + 1}
                item={item}
              />
            ))}
          </div>
          {/*//row*/}
          <Link className="btn btn-cta btn-cta-secondary" to="/service">
            Voir plus
          </Link>
        </div>
        {/*//container*/}
      </section>
      {/*//who*/}
      {/* ******Latest work section****** */}
      <section id="latest-work" className="latest-work section">
        <div className="container-fluid text-center">
          <h2 className="title text-center">Nos realisations</h2>
          <div id="work-slider" className="items work-slider">
            {realisations.map((item, index) => (
              <Realisation
                item={item}
                ind={index + 1}
                key={parseInt(item.id_realisation) + index + 7}
              />
            ))}
          </div>
          {/*//owl-carousel*/}
          <Link className="btn btn-cta btn-cta-secondary" to="/realisation">
            Voir plus
          </Link>
        </div>
        {/*container-fluid*/}
      </section>
      {/*//latest-work*/}
      {/* ******Testimonials Section****** */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <h2 className="title text-center">Temoignages</h2>
          <p className="intro text-center">
            Ne prenez pas compte seulement de nos mots,regardez aussi ce que les
            clients disent de nous ):
          </p>
          <div className="row">
            {temoignages.map((item, index) => (
              <Temoignage
                base_url_api={base_url_api}
                item={item}
                ind={index + 1}
                key={parseInt(item.id_temoignage) + index + 7}
              />
            ))}
          </div>
          {/*//row*/}
        </div>
        {/*//container*/}
      </section>
      {/*//testimonials*/}
      {/* ******Logos Section****** */}
      <section id="logos" className="logos section">
        <div className="container text-center">
          <h2 className="title">Nos Partenaires</h2>
          <ul className="logo-list list-inline row">
            {partners.map((item, index) => (
              <Partner
                item={item}
                ind={index + 1}
                key={parseInt(item.id_partner) + index + 7}
              />
            ))}
          </ul>
        </div>
      </section>
      <Chat />

      <section id="latest-blog" className="latest-blog section">
        <div className="container">
          <h2 className="title text-center">Nos Formations</h2>
          <div className="row justify-content-center">
            <Formation/>
           
          </div>
          {/*//row*/}
        </div>
        {/*//container*/}
      </section>
      {/*//latest-blog*/}

      <Footer />
      {/*//footer*/}
      {/* Contact Modal */}
      <Config />
    </div>
  );
}

export default HomePage;
