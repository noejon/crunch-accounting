import validatePostcode from "./validatePostcode";

/**
 * - Street No. & Street - text input
 * - City - text input
 * - State - dropdown
 * - Postcode - text input (valid postcode only)
 */

const validateAddress = ({ city, postcode, state, streetAddress }) =>
  Boolean(
    city && postcode && state && streetAddress && !validatePostcode(postcode)
    // validatePostcode returns an error message if it is not valid
  );

export default validateAddress;
