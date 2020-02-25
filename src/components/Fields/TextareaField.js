import React from "react";
import styled from "styled-components";
import FormField from "../FormField";

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  resize: vertical;
  background-color: white;
  font-size: 1rem;
  font-family: sans-serif;
  line-height: 1.5;
  height: 10em;
  border: 0;
  border-radius: 0;
`;

const TextareaField = ({ input, label, meta }) => (
  <FormField label={label} meta={meta} {...input}>
    <Textarea />
  </FormField>
);

export default TextareaField;
