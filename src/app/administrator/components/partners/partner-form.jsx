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

function PartnerForm() {
  const [base_url, api, model] = useOutletContext();
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});

  const [image, setImage] = useState({ preview: "", data: "" });

  const namePartner = useRef("");
  const logoPartner = useRef("");
  const linkPartner = useRef("");
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

        namePartner.current = data.data.name_partner
        linkPartner.current = data.data.link_partner
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

    formData.append("logo_partner", image.data);
    formData.append("name_partner", namePartner.current);
    formData.append("link_partner", linkPartner.current);
    
    let response;
    if (id === "" || id === undefined) {
      response = await model.create(formData);
    }
    else{
      response = await model.update(formData,id);
    }

    if (response.status === 200) {
      Navigator(`/administrator/partners/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} un partenaire`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/partners/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>

        <Field
          type={"text"}
          ref={namePartner}
          value={selectedItem.name_partner}
          name_prop={"title_about"}
          onChange={(e) => (namePartner.current = e.target.value)}
          label="Nom partenaire"
        />
        <Field
          type={"file"}
          ref={logoPartner}
          value={selectedItem.logo_partner}
          name_prop={"logo_partner"}
          onChange={handleFileChange}
          label="Logo partenaire"
        />
        <Field
          type={"text"}
          ref={linkPartner}
          onChange={(e) => (linkPartner.current = e.target.value)}
          value={selectedItem.link_partner}
          name_prop={"link_partner"}
          label="Lien(web)"
        />
      </Form>
    </div>
  );
}

export default PartnerForm;
