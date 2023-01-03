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

function DiapoForm() {
  const [base_url, api, model] = useOutletContext();
  const [image, setImage] = useState({ preview: "", data: "" });
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});

  const titre = useRef("");
  const sousTitre = useRef("");
  const imageRef = useRef("");
  const description = useRef("");
  const position = useRef("");
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getOne();
  }, [id]);

  

  const getOne = async () => {
    if (id === "" || id === undefined) {
      setSelectedItem({});
    } else {
      const response = await model.getOne(id);
      if (response.status === 200) {
        const data = await response.json();
        setSelectedItem(data.data);
        console.log(data.data)
        titre.current = data.data.title_diapo
        sousTitre.current = data.data.subtitle_diapo
        description.current = data.data.description
        position.current = data.data.position_diapo
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

    formData.append("image_diapo", image.data);
    formData.append("title_diapo", titre.current);
    formData.append("subtitle_diapo", sousTitre.current);
    formData.append("description", description.current);
    formData.append("position_diapo", position.current);
    
    let response;
    if (id === "" || id === undefined) {
      response = await model.create(formData);
    }
    else{
      response = await model.update(formData,id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/diapos/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} un diapo`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/diapos/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={titre}
          value={selectedItem.title_diapo}
          name_prop={"title_diapo"}
          onChange={(e) => (titre.current = e.target.value)}
          label="Titre"
        />
        <Field
          type={"text"}
          ref={sousTitre}
          value={selectedItem.subtitle_diapo}
          name_prop={"subtitle_diapo"}
          onChange={(e) => (sousTitre.current = e.target.value)}
          label="Sous Titre"
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
          type={"number"}
          ref={position}
          value={selectedItem.position_diapo}
          name_prop="position_diapo"
          onChange={(e) => (position.current = e.target.value)}
          label="Position sur la page"
        />
      </Form>
    </div>
  );
}

export default DiapoForm;
