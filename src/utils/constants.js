export const CONTACT_FORM_NAME = "contactFormName";

export const FORM_ERRORS = {
  EMAIL: "Please check the email format",
  REQUIRED: "Required",
  PHONE_NUMBER: "Please check the phone number format",
  POSTCODE: "Please check the postcode format"
};

export const HEADINGS = {
  ADDRESS: "Address information",
  CONTACT: "Contact information",
  DESCRIPTION: "Description information",
  IMAGE: "Contact Image"
};

export const LABELS = {
  ACCOUNT_NAME: "Account Name",
  ADDRESS: "Address",
  CITY: "City",
  COMPANY_NAME: "Company Name",
  CONTACT_OWNER: "Contact Owner",
  DESCRIPTION: "Description",
  EMAIL: "Email",
  EMAIL_OPT_OUT: "Email Opt Out",
  FAX: "Fax",
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  OPTIONAL: " (optional)",
  PHONE: "Phone",
  POSTCODE: "Postcode",
  STATE: "State",
  STREET_ADDRESS: "Street No. & Street",
  TITLE: "Title"
};

export const REGEXPS = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PHONE_NUMBER: /^(?:0)[2-478](?:[0-9]){8}$/,
  POSTCODE: /^[0-9]{4}/
};
