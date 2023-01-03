import React from "react";

function Field(props) {
  let fieldString = (
    <input
      ref={props.ref}
      type={props.type}
      onChange={(e) => props.onChange(e)}
      className="form-control"
      name={props.name_prop}
      placeholder={props.label}
      defaultValue={props.value}
    />
  );

  if (props.type === "textarea") {
    fieldString = (
      <textarea
        placeholder={props.label}
        ref={props.ref}
        onChange={(e) => props.onChange(e)}
        name={props.name_prop}
        type={props.type}
        className="form-control"
        defaultValue={props.value}
      >
        {props.value}
      </textarea>
    );
  }

  if (props.type === "selectBox") {
    fieldString = (
      <select
        ref={props.ref}
        className="form-control"
        name={props.name_prop}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      >
        <option value={''}>--Selectionnez {props.label}---</option>
        {props.options}

      </select>
    );
  }
  return (
    <div className="form-group">
      <label htmlFor="form_lab">{props.label}</label>

      {fieldString}
    </div>
  );
}

Field.defaultProps = {
  options: '',
};

export default Field;
