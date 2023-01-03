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

function ServicePage() {
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
    getAddresses();
  }, []);

  return (
    <div>
      <Header position={1} is_home={false}/>
      
      <section id="services" className="services section">
        <div className="container text-center">
          <h2 className="title">Services</h2>
          <p className="intro">
            Nos services sont repartis dans plusieurs departements,alors voice quelques services et si vous voulez en savoir plus,nos contacts sont à vos portées
          </p>
          <div className="service-items row">

          {services.map((item,index)=>(<Service key={parseInt(item.id_service)+index+1} item={item}/>))}
            
          </div>
          
        </div>
        {/*//container*/}
      </section>
      {/* ******CTA Section****** */}
      <Chat/>
      <Footer/>
    </div>
  );
}

export default ServicePage;
