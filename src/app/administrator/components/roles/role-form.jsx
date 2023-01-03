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

function RoleForm() {
  const [base_url, api, model] = useOutletContext();
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});

  const nameRole = useRef("");
  const descriptionRole = useRef("");
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

        descriptionRole.current = data.data.description
        nameRole.current = data.data.name_role
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem)
  };

  const handleForm = async (e) => {
    e.preventDefault();

    let data = {
      description: descriptionRole.current,
      name_role: nameRole.current,
    };
   
    let response;
    if (id === "" || id === undefined) {
      response = await model.create(data);
    }
    else{
      response = await model.update(data,id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/roles/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} un role`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/roles/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={nameRole}
          value={selectedItem.name_role}
          name_prop={"name_role"}
          onChange={(e) => (nameRole.current = e.target.value)}
          label="Nom role"
        />
        <Field
          type={"textarea"}
          ref={descriptionRole}
          value={selectedItem.description}
          name_prop={"description"}
          onChange={(e) => (descriptionRole.current = e.target.value)}
          label="Description"
        />
       
      </Form>
    </div>
  );
}

export default RoleForm;
