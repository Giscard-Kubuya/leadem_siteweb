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

function ClientForm() {
  const [base_url, api, model] = useOutletContext();
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});

  const nameClient = useRef("");
  const typeClient = useRef("");
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

        typeClient.current = data.data.type_client
        nameClient.current = data.data.name_client
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem)
  };

  const handleForm = async (e) => {
    e.preventDefault();

    let data = {
      type_client: typeClient.current,
      name_client: nameClient.current,
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
      Navigator(`/administrator/clients/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} un client`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/clients/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={nameClient}
          value={selectedItem.name_client}
          name_prop={"name_client"}
          onChange={(e) => (nameClient.current = e.target.value)}
          label="Nom client"
        />
        <Field
          type={"text"}
          ref={typeClient}
          value={selectedItem.type_client}
          name_prop={"type_client"}
          onChange={(e) => (typeClient.current = e.target.value)}
          label="Type client"
        />
       
      </Form>
    </div>
  );
}

export default ClientForm;
