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

function RealisationForm() {
  const [base_url, api, model,modelClient] = useOutletContext();
  const [image, setImage] = useState({ preview: "", data: "" });
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const [clients,setClients] = useState([]);

  const titre = useRef("");
  const client = useRef("");
  const imageRef = useRef("");
  const description = useRef("");
  const work = useRef("");
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getOne();
    getAllClients();
  }, []);

  

  const getOne = async () => {
    if (id === "" || id === undefined) {
      setSelectedItem({});
    } else {
      const response = await model.getOne(id);
      if (response.status === 200) {
        const data = await response.json();
        setSelectedItem(data.data);
        titre.current = data.data.titre_realisation
        client.current = data.data.client_id
        description.current = data.data.description
        work.current = data.data.work_realisation
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem)
  };

  const getAllClients = async () => {
    const response = await modelClient.getAll();
    if (response.status === 200) {
      const data = await response.json();
      setClients(data.data);
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

    formData.append("image_realisation", image.data);
    formData.append("titre_realisation", titre.current);
    formData.append("client_id", client.current);
    formData.append("description", description.current);
    formData.append("work_realisation", work.current);
    
    let response;
    if (id === "" || id === undefined) {
      response = await model.create(formData);
    }
    else{
      response = await model.update(formData,id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/realisations/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };

  const optionsClient = clients.map((itm)=>(
    <option value={itm.id_client}>{itm.name_client}</option>
  ));
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} une realisation`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/realisations/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={titre}
          value={selectedItem.titre_realisation}
          name_prop={"titre_realisation"}
          onChange={(e) => (titre.current = e.target.value)}
          label="Titre"
        />
        <Field
          type={"selectBox"}
          ref={client}
          options={optionsClient}
          value={selectedItem.client_id}
          name_prop={"client_id"}
          onChange={(e) => (client.current = e.target.value)}
          label="Client"
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
          label="Sous Titre"
        />
        <Field
          type={"text"}
          ref={work}
          value={selectedItem.work_realisation}
          name_prop="work_realisation"
          onChange={(e) => (work.current = e.target.value)}
          label="Travail"
        />
      </Form>
    </div>
  );
}

export default RealisationForm;
