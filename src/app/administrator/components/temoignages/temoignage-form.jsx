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

function TemoignageForm() {
  const [base_url, api, model,modelTemoin] = useOutletContext();
  const [message, setMessage] = useState("");
  const Navigator = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const [temoins,setTemoins] = useState([]);

  const temoin = useRef("");
  const description = useRef("");
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getOne();
    getAllTemoins();
  }, []);

  const getOne = async () => {
    if (id === "" || id === undefined) {
      setSelectedItem({});
    } else {
      const response = await model.getOne(id);
      if (response.status === 200) {
        const data = await response.json();
        setSelectedItem(data.data);
        temoin.current = data.data.temoin_id;
        description.current = data.data.description;
      } else {
        setSelectedItem({});
      }
    }

    console.log(selectedItem);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    let data = {
      temoin_id: temoin.current,
      description: description.current,
    };

    let response;
    if (id === "" || id === undefined) {
      response = await model.create(data);
    } else {
      response = await model.update(data, id);
    }

    if (response.status === 200) {
      // const data = await response.json();
      Navigator(`/administrator/temoignages/list`);
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };

  const getAllTemoins = async () => {
    const response = await modelTemoin.getAll();
    if (response.status === 200) {
      const data = await response.json();
      setTemoins(data.data);
    }
  };

  const optionsTemoin = temoins.map((itm)=>(
    <option value={itm.id_temoin}>{itm.name_temoin}</option>
  ));
  return (
    <div>
      <Form
        target_text={`${
          id === "" || id === undefined ? "Ajouter" : " Modifier"
        } un temoingage`}
        message={message}
        action={handleForm}
      >
        <span className="card-title " style={{ float: "right" }}>
          <Link
            to={`/administrator/temoignages/list`}
            type="button"
            className="btn btn-outline-primary btn-xs"
          >
            <i className="ti-arrow-left" />
          </Link>
        </span>

        <Field
          type={"selectBox"}
          ref={temoin}
          options={optionsTemoin}
          value={selectedItem.temoin_id}
          name_prop={"client_id"}
          onChange={(e) => (temoin.current = e.target.value)}
          label="Temoin"
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

export default TemoignageForm;
