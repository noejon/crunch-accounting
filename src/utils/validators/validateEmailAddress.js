import { REGEXPS } from "../constants";

export default function validateEmail(email) {
  return REGEXPS.EMAIL.test(email);
}
