import { FORM_ERRORS, REGEXPS } from "../constants";

const validateEmail = value => !REGEXPS.EMAIL.test(value) && FORM_ERRORS.EMAIL;

export default validateEmail;
