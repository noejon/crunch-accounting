import validateEmailAddress from "./validateEmailAddress";
import validatePhoneNumber from "./validatePhoneNumber";
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

const validateContactInformation = ({
  accountName,
  companyName,
  contactOwner,
  email,
  firstName,
  lastName,
  phone
}) =>
  Boolean(
    accountName &&
      companyName &&
      contactOwner &&
      email &&
      firstName &&
      lastName &&
      phone &&
      !validateEmailAddress(email) &&
      // validateEmailAddress returns an error message if it is not valid
      !validatePhoneNumber(phone)
    // validatePhoneNumber returns an error message if it is not valid
  );

export default validateContactInformation;
