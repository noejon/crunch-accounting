import React from "react";
import styled from "styled-components";
import FormField from "../FormField";

const Textarea = styled.textarea``;

const TextareaField = ({ input, label, meta }) => (
  <FormField label={label} meta={meta} {...input}>
    <Textarea />
  </FormField>
);

export default TextareaField;
