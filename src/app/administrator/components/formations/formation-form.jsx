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

function FormationForm() {
  const [base_url, api, model, modelTeam] = useOutletContext();
  const [image, setImage] = useState({ preview: "", data: "" });
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const [teams, setTeams] = useState([]);

  const nameRef = useRef("");
  const debutRef = useRef("");
  const finRef = useRef("");
  const teamRef = useRef("");
  const imageRef = useRef("");
  const description = useRef("");
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getOne();
    getAllTeams();
  }, []);

  const getOne = async () => {
    if (id === "" || id === undefined) {
      setSelectedItem({});
    } else {
      const response = await model.getOne(id);
      if (response.status === 200) {
        const data = await response.json();
        setSelectedItem(data.data);
        nameRef.current = data.data.name_formation;
        debutRef.current = data.data.start_formation;
        finRef.current = data.data.end_formation;
        teamRef.current = data.data.team_id;
        description.current = data.data.description;
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem);
  };

  const getAllTeams = async () => {
    const response = await modelTeam.getAll();
    if (response.status === 200) {
      const data = await response.json();
      setTeams(data.data);
    }
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(image);
    let formData = new FormData();

    formData.append("image_formation", image.data);
    formData.append("name_formation", nameRef.current);
    formData.append("start_formation", debutRef.current);
    formData.append("end_formation", finRef.current);
    formData.append("team_id", teamRef.current);
    formData.append("description", description.current);

    let response;
    if (id === "" || id === undefined) {
      response = await model.create(formData);
    } else {
      response = await model.update(formData, id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/formations/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };

  const optionsTeam = teams.map((itm) => (
    <option value={itm.id_team}>{itm.name_team}</option>
  ));
  return (
    <div>
      <Form
        target_text={`${
          id === "" || id === undefined ? "Ajouter" : " Modifier"
        } une formation`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/formations/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={nameRef}
          value={selectedItem.name_formation}
          name_prop={"name_formation"}
          onChange={(e) => (nameRef.current = e.target.value)}
          label="Nom"
        />

        <Field
          type={"date"}
          ref={debutRef}
          value={selectedItem.start_formation}
          name_prop={"start_formation"}
          onChange={(e) => (debutRef.current = e.target.value)}
          label="Debut"
        />

        <Field
          type={"date"}
          ref={finRef}
          value={selectedItem.end_formation}
          name_prop={"end_formation"}
          onChange={(e) => (finRef.current = e.target.value)}
          label="Fin"
        />
        <Field
          type={"selectBox"}
          ref={teamRef}
          options={optionsTeam}
          value={selectedItem.team_id}
          name_prop={"team_id"}
          onChange={(e) => (teamRef.current = e.target.value)}
          label="Formateur"
        />
        <Field
          type={"textarea"}
          ref={description}
          value={selectedItem.description}
          name_prop={"description"}
          onChange={(e) => (description.current = e.target.value)}
          label="Description"
        />
        <Field
          type={"file"}
          ref={imageRef}
          name_prop={"image_diapo"}
          onChange={handleFileChange}
          label="Photo de couverture"
        />
      </Form>
    </div>
  );
}

export default FormationForm;
