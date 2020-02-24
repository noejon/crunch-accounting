export default function addErrorDescriptionToErrors(
  errors,
  fieldName,
  errorMessage
) {
  if (fieldName && errorMessage) {
    return errors
      ? { ...errors, [fieldName]: errorMessage }
      : { [fieldName]: errorMessage };
  }
}
