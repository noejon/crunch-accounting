import { FORM_ERRORS } from "../constants";

const validateRequired = value => !value && FORM_ERRORS.REQUIRED;

export default validateRequired;
