import React from "react";
import { Input } from "reactstrap";
import "../../../App.css";

const InputField = (props) => {
  return (
    <div className="input-style">
      <input
        title={props.title}
        pattern={props.pattern}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        id={props.icon}
        style={props?.style}
      />
    </div>
  );
};

export default InputField;
