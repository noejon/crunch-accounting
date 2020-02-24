export const REGEXPS = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PHONE_NUMBER: /^(?:0)[2-478](?:[0-9]){8}$/,
  POSTCODE: /^[0-9]{4}/
};

export const FORM_ERRORS = {
  REQUIRED: "Required",
  POSTCODE: "Please check the postcode format",
  PHONE_NUMBER: "Please check the phone number format",
  EMAIL: "Please check the email format"
};

export const CONTACT_FORM_NAME = "contactFormName";
