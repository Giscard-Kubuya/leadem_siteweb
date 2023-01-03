import React from "react";
import Form from "../../shared/form";
import Field from "../../shared/field";
import { useRef, useState, useEffect } from "react";
import {
  useOutletContext,
  useNavigate,
  Link,
  useParams,
} from "react-router-dom";

function InscriptionForm() {
  const [base_url, api, model, modelFormation, modelStagiaire] =
    useOutletContext();
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const [stagiaires, setStagiaires] = useState([]);
  const [formations, setFormations] = useState([]);

  const stagiaireRef = useRef("");
  const formationRef = useRef("");
  const statusRef = useRef("");
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getOne();
    getAllStagiaires();
    getAllFormations();
  }, []);

  const getOne = async () => {
    if (id === "" || id === undefined) {
      setSelectedItem({});
    } else {
      const response = await model.getOne(id);
      if (response.status === 200) {
        const data = await response.json();
        setSelectedItem(data.data);
        stagiaireRef.current = data.data.stagiaire_id;
        formationRef.current = data.data.formation_id;
        statusRef.current = data.data.status_inscription;
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    let data = {
      stagiaire_id: stagiaireRef.current,
      formation_id: formationRef.current,
      status_inscription: statusRef.current,
    };

    let response;
    if (id === "" || id === undefined) {
      response = await model.create(data);
    } else {
      response = await model.update(data, id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/inscriptions/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };

  const getAllStagiaires = async () => {
    const response = await modelStagiaire.getAll();
    if (response.status === 200) {
      const data = await response.json();
      setStagiaires(data.data);
    }
  };
  const getAllFormations = async () => {
    const response = await modelFormation.getAll();
    if (response.status === 200) {
      const data = await response.json();
      setFormations(data.data);
    }
  };

  const optionsStatus = ["En attente", "Validé", "Suspendu", "Rejetté"].map(
    (itm, index) => <option value={index}>{itm}</option>
  );

  const optionsStagiaire = stagiaires.map((itm) => (
    <option value={itm.id_stagiaire}>{itm.name_stagiaire} {itm.postnom_stagiaire}</option>
  ));

  const optionsFormation = formations.map((itm) => (
    <option value={itm.id_formation}>{itm.name_formation}</option>
  ));
  return (
    <div>
      <Form
        target_text={`${
          id === "" || id === undefined ? "Ajouter" : " Modifier"
        } une inscription`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/inscriptions/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>

        <Field
          type={"selectBox"}
          ref={stagiaireRef}
          options={optionsStagiaire}
          value={selectedItem.stagiaire_id}
          name_prop={"stagiaire_id"}
          onChange={(e) => (stagiaireRef.current = e.target.value)}
          label="Stagiaire"
        />

        <Field
          type={"selectBox"}
          ref={formationRef}
          options={optionsFormation}
          value={selectedItem.formation_id}
          name_prop={"formation_id"}
          onChange={(e) => (formationRef.current = e.target.value)}
          label="Formation"
        />

        <Field
          type={"selectBox"}
          ref={statusRef}
          options={optionsStatus}
          value={selectedItem.status_inscription}
          name_prop={"status_inscription"}
          onChange={(e) => (statusRef.current = e.target.value)}
          label="Status"
        />
      </Form>
    </div>
  );
}

export default InscriptionForm;
