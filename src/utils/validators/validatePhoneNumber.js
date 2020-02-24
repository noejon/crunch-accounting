import { FORM_ERRORS, REGEXPS } from "../constants";

const validatePhoneNumber = value =>
  !REGEXPS.PHONE_NUMBER.test(value) && FORM_ERRORS.PHONE_NUMBER;

export default validatePhoneNumber;
