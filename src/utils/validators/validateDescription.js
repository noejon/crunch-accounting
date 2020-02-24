import addErrorDescriptionToErrors from "./addErrorDescriptionToErrors";
import { FORM_ERRORS } from "../constants";

export default function validateDescription({ description }) {
  const errors = {};
  if (!description)
    addErrorDescriptionToErrors(errors, "description", FORM_ERRORS.REQUIRED);
  return errors;
}
