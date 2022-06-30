import React from "react";
import { Input } from "reactstrap";

const InputField = (props) => {
  return (
    <div className="input-field-1">
      <Input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        id={props.icon}
        style={props?.style}
        autofocus=""
      />
    </div>
  );
};

export default InputField;
