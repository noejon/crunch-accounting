import { REGEXPS } from "../constants";

export default function validatePhoneNumber(phone) {
  return REGEXPS.POSTCODE.test(phone);
}
