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

function PositionForm() {
  const [base_url, api, model] = useOutletContext();
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});

  const namePosition = useRef("");
  const description = useRef("");
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

        namePosition.current = data.data.name_position
        description.current = data.data.description
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem)
  };

  const handleForm = async (e) => {
    e.preventDefault();

    let data = {
      name_position: namePosition.current,
      description: description.current,
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
      Navigator(`/administrator/positions/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} une position`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/positions/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={namePosition}
          value={selectedItem.name_position}
          name_prop={"name_position"}
          onChange={(e) => (namePosition.current = e.target.value)}
          label="Nom da la position"
        />
        <Field
          type={"textarea"}
          ref={description}
          value={selectedItem.description}
          name_prop={"description"}
          onChange={(e) => (description.current = e.target.value)}
          label="Description"
        />
      </Form>
    </div>
  );
}

export default PositionForm;
