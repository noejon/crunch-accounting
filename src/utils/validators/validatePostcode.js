import { REGEXPS } from "../constants";

export default function validatePostcode(postcode) {
  return REGEXPS.POSTCODE.test(postcode);
}
