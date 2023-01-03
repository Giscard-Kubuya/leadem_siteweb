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

function AddressForm() {
  const [base_url, api, model] = useOutletContext();
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});

  const titre = useRef("");
  const linkAddress = useRef("");
  const typeAddress = useRef("");
  const iconAddress = useRef("");
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

        linkAddress.current = data.data.link_address
        iconAddress.current = data.data.icon_address
        typeAddress.current = data.data.type_address
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem)
  };

  const handleForm = async (e) => {
    e.preventDefault();

    let data = {
      link_address: linkAddress.current,
      icon_address: iconAddress.current,
      type_address: typeAddress.current,
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
      Navigator(`/administrator/addresses/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };
  return (
    <div>
      <Form
        target_text={`${id === "" || id === undefined?'Ajouter':' Modifier'} un address`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/addresses/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>
        <Field
          type={"text"}
          ref={linkAddress}
          value={selectedItem.link_address}
          name_prop={"link_address"}
          onChange={(e) => (linkAddress.current = e.target.value)}
          label="Lien"
        />
        <Field
          type={"text"}
          ref={iconAddress}
          value={selectedItem.icon_address}
          name_prop={"icon_address"}
          onChange={(e) => (iconAddress.current = e.target.value)}
          label="Icon"
        />
        <Field
          type={"text"}
          ref={typeAddress}
          value={selectedItem.type_address}
          name_prop={"type_address"}
          onChange={(e) => (typeAddress.current = e.target.value)}
          label="Type"
        />
      </Form>
    </div>
  );
}

export default AddressForm;
