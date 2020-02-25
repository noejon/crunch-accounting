import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormField from "../FormField";

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: sans-serif;
  line-height: 1.5;
  border: 0;
`;

const TextField = ({ input, label, meta }) => (
  <FormField label={label} meta={meta} {...input}>
    <Input type="text" />
  </FormField>
);

TextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

TextField.defaultProps = {
  label: ""
};

export default TextField;
