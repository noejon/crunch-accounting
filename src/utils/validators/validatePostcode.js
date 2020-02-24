import { FORM_ERRORS, REGEXPS } from "../constants";

const validatePostcode = value =>
  !REGEXPS.POSTCODE.test(value) && FORM_ERRORS.POSTCODE;

export default validatePostcode;
