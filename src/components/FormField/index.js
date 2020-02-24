import React from "react";
import uniqueId from "lodash.uniqueid";
import InputWrapper from "./InputWrapper";
import ErrorIcon from "./ErrorIcon";
import ErrorMessage from "./ErrorMessage";

const FormField = ({
  children,
  label,
  meta: { touched, error },
  ...otherProps
}) => {
  const formFieldId = uniqueId("formfield-");

  return (
    <div>
      <label htmlFor={formFieldId}>{label}</label>
      <InputWrapper>
        {children &&
          React.cloneElement(children, {
            ...otherProps,
            id: formFieldId
          })}
        {error && <ErrorIcon />}
      </InputWrapper>
      {touched && error && <ErrorMessage error={error} id={formFieldId} />}
    </div>
  );
};

export default FormField;
