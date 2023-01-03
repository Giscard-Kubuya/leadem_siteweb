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

function StagiaireForm() {
  const [base_url, api, model] = useOutletContext();
  const [image, setImage] = useState({ preview: "", data: "" });
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});

  const nameRef = useRef("");
  const postRef = useRef("");
  const documentRef = useRef("");
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
        nameRef.current = data.data.name_stagiaire
        postRef.current = data.data.postnom_stagiaire
      } else {
        setSelectedItem({});
      }
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

    formData.append("cv_stagiaire", image.data);
    formData.append("postnom_stagiaire", postRef.current);
    formData.append("name_stagiaire", nameRef.current);
    
    let response;
    if (id === "" || id === undefined) {
      response = await model.create(formData);
    }
    else{
      response = await model.update(formData,id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/stagiaires/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} un stagiaire`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/stagiaires/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={nameRef}
          value={selectedItem.name_stagiaire}
          name_prop={"name_stagiaire"}
          onChange={(e) => (nameRef.current = e.target.value)}
          label="Nom "
        />
        <Field
          type={"text"}
          ref={postRef}
          value={selectedItem.postnom_stagiaire}
          name_prop={"postnom_stagiaire"}
          onChange={(e) => (postRef.current = e.target.value)}
          label="Post-Nom"
        />
        <Field
          type={"file"}
          ref={documentRef}
          name_prop={"cv_stagiaire"}
          onChange={handleFileChange}
          label="CV"
        />
        
      </Form>
    </div>
  );
}

export default StagiaireForm;
