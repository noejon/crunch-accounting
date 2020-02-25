import React from "react";
import uniqueId from "lodash.uniqueid";
import styled from "styled-components";
import InputWrapper from "./InputWrapper";
import ErrorIcon from "./ErrorIcon";
import ErrorMessage from "./ErrorMessage";

const Label = styled.label`
  display: block;
  font-weight: 700;
  line-height: 1.5;
`;

Label.displayName = "FormFieldLabel";

const Wrapper = styled.div`
  padding-right: 1.024em;
  margin-bottom: 1.024em;
  width: 100%;
`;

Wrapper.displayName = "FormFieldWrapper";

const FormField = ({
  children,
  label,
  meta: { touched, error },
  ...otherProps
}) => {
  const formFieldId = uniqueId("formfield-");

  return (
    <Wrapper>
      <Label htmlFor={formFieldId}>{label}</Label>
      <InputWrapper>
        {children &&
          React.cloneElement(children, {
            ...otherProps,
            id: formFieldId
          })}
        {touched && error && <ErrorIcon />}
      </InputWrapper>
      {touched && error && <ErrorMessage error={error} id={formFieldId} />}
    </Wrapper>
  );
};

export default FormField;
