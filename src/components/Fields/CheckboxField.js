import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";
import uniqueId from "lodash.uniqueid";

const LabelText = styled.span`
  margin-right: 8px;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  line-height: 1.5;
`;

Label.displayName = "FormFieldLabel";

const CheckboxField = ({ input, label }) => {
  const id = uniqueId();
  return (
    <Label htmlFor={id}>
      <LabelText>{label}</LabelText>
      <Checkbox
        checked={input.checked ? true : false}
        id={id}
        onChange={input.onChange}
      />
    </Label>
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired
};

CheckboxField.defaultProps = {
  label: ""
};

export default CheckboxField;
