import React from "react";
import styled from "styled-components";
import FormField from "../FormField";

const Input = styled.input``;

const TextField = ({ input, label, meta }) => (
  <FormField label={label} meta={meta} {...input}>
    <Input type="text" />
  </FormField>
);

export default TextField;
