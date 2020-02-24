import addErrorDescriptionToErrors from "./addErrorDescriptionToErrors";
import validatePostcode from "./validatePostcode";
import { FORM_ERRORS } from "../constants";

/**
 * - Street No. & Street - text input
 * - City - text input
 * - State - dropdown
 * - Postcode - text input (valid postcode only)

 */

export default function validateAddressInformation({
  city,
  postcode,
  state,
  streetAddress
}) {
  const errors = {};
  if (!city) addErrorDescriptionToErrors(errors, "city", FORM_ERRORS.REQUIRED);
  if (!postcode)
    addErrorDescriptionToErrors(errors, "postcode", FORM_ERRORS.REQUIRED);
  else if (!validatePostcode(postcode))
    addErrorDescriptionToErrors(errors, "postcode", "Invalid postcode");
  if (!state)
    addErrorDescriptionToErrors(errors, "state", FORM_ERRORS.REQUIRED);
  if (!streetAddress)
    addErrorDescriptionToErrors(errors, "streetAddress", FORM_ERRORS.REQUIRED);
  return errors;
}
