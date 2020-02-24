import validateAddressInformation from "./validateAddressInformation";
import validateContactInformation from "./validateContactInformation";
import validateDescription from "./validateDescription";

export default function validateContactForm(values) {
  return {
    ...validateAddressInformation(values),
    ...validateContactInformation(values),
    ...validateDescription(values)
  };
}
