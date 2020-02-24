import addErrorDescriptionToErrors from "./addErrorDescriptionToErrors";
import validateEmailAddress from "./validateEmailAddress";
import validatePhoneNumber from "./validatePhoneNumber";
import { FORM_ERRORS } from "../constants";
/**
 * Contact Owner - text input
 * First name - text input (with dropdown to select title)
 * Last name - text input
 * Account name - text input
 * Company name - optional text input
 * Phone - text input (valid numbers only)
 * Fax - optional text input
 * Email - text input - valid email only
 * Email opt out - check box
 */

export default function validateContactInformation({
  accountName,
  contactOwner,
  email,
  firstName,
  lastName,
  title,
  phone
}) {
  const errors = {};
  if (!contactOwner)
    addErrorDescriptionToErrors(errors, "contactOwner", FORM_ERRORS.REQUIRED);
  if (!accountName)
    addErrorDescriptionToErrors(errors, "accountName", FORM_ERRORS.REQUIRED);
  if (!email)
    addErrorDescriptionToErrors(errors, "email", FORM_ERRORS.REQUIRED);
  else if (!validateEmailAddress(email))
    addErrorDescriptionToErrors(errors, "email", "Invalid email address");
  if (title === "none") {
    addErrorDescriptionToErrors(errors, "firstName", "Title is not selected");
  } else if (!firstName) {
    addErrorDescriptionToErrors(errors, "firstName", "First Name is required");
  }
  if (!lastName)
    addErrorDescriptionToErrors(errors, "lastName", FORM_ERRORS.REQUIRED);
  if (!phone)
    addErrorDescriptionToErrors(errors, "phone", FORM_ERRORS.REQUIRED);
  else if (!validatePhoneNumber(phone))
    addErrorDescriptionToErrors(errors, "phone", FORM_ERRORS.REQUIRED);
  return errors;
}
