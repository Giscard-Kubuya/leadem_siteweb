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

function TeamForm() {
  const [base_url, api, model,modelPosition] = useOutletContext();
  const [image, setImage] = useState({ preview: "", data: "" });
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const [positions,setPositions] = useState([]);

  const positionRef = useRef("");
  const nameRef = useRef("");
  const imageRef = useRef("");
  const description = useRef("");
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getOne();
    getAllPositions();
  }, [id]);


  const getOne = async () => {
    if (id === "" || id === undefined) {
      setSelectedItem({});
    } else {
      const response = await model.getOne(id);
      if (response.status === 200) {
        const data = await response.json();
        setSelectedItem(data.data);
        nameRef.current = data.data.name_team
        positionRef.current = data.data.position_id
        description.current = data.data.description
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem)
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

    formData.append("image_team", image.data);
    formData.append("name_team", nameRef.current);
    formData.append("description", description.current);
    formData.append("position_id", positionRef.current);
    
    let response;
    if (id === "" || id === undefined) {
      response = await model.create(formData);
    }
    else{
      response = await model.update(formData,id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/teams/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };

  const getAllPositions = async () => {
    const response = await modelPosition.getAll();
    if (response.status === 200) {
      const data = await response.json();
      setPositions(data.data);
    }
  };

  const optionsPosition = positions.map((itm)=>(
    <option value={itm.id_position}>{itm.name_position}</option>
  ));
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} un diapo`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/teams/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={nameRef}
          value={selectedItem.name_team}
          name_prop={"name_team"}
          onChange={(e) => (nameRef.current = e.target.value)}
          label="Sous Titre"
        />
        <Field
          type={"selectBox"}
          ref={positionRef}
          options={optionsPosition}
          value={selectedItem.position_id}
          name_prop={"client_id"}
          onChange={(e) => (positionRef.current = e.target.value)}
          label="Position"
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
          name_prop={"image_team"}
          onChange={handleFileChange}
          label="Sous Titre"
        />
        
      </Form>
    </div>
  );
}

export default TeamForm;
