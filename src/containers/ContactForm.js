import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import validateEmail from "../utils/validators/validateEmailAddress";
import validateRequired from "../utils/validators/validateRequired";
import validatePostcode from "../utils/validators/validatePostcode";
import validatePhone from "../utils/validators/validatePhoneNumber";
import TextField from "../components/Fields/TextField";
import TextareaField from "../components/Fields/TextareaField";
import { CONTACT_FORM_NAME, HEADINGS, LABELS } from "../utils/constants";
import { showModal } from "../actions";
import H3 from "../components/H3";

let ContactForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <H3>{HEADINGS.IMAGE}</H3>

      <H3>{HEADINGS.CONTACT}</H3>
      <Field
        component={TextField}
        label={LABELS.CONTACT_OWNER}
        name="contactOwner"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.FIRST_NAME}
        name="firstName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.LAST_NAME}
        name="lastName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.ACCOUNT_NAME}
        name="accountName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.COMPANY_NAME}
        name="companyName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.PHONE}
        name="phone"
        type="text"
        validate={[validateRequired, validatePhone]}
      />
      <Field
        component={TextField}
        label={`${LABELS.FAX}${LABELS.OPTIONAL}`}
        name="fax"
        type="text"
      />
      <Field
        component={TextField}
        label={`${LABELS.TITLE}${LABELS.OPTIONAL}`}
        name="title"
        type="text"
      />
      <Field
        component={TextField}
        label={LABELS.EMAIL}
        name="email"
        type="text"
        validate={[validateRequired, validateEmail]}
      />
      <H3>{HEADINGS.ADDRESS}</H3>
      <Field
        component={TextField}
        label={LABELS.STREET_ADDRESS}
        name="streetAddress"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.CITY}
        name="city"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.STATE}
        name="state"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label={LABELS.POSTCODE}
        name="postcode"
        type="text"
        validate={[validateRequired, validatePostcode]}
      />
      <H3>{HEADINGS.DESCRIPTION}</H3>
      <Field
        component={TextareaField}
        label={LABELS.DESCRIPTION}
        name="description"
        type="text"
        validate={validateRequired}
      />
    </form>
  );
};

ContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

ContactForm = connect()(ContactForm);

ContactForm = reduxForm({
  form: CONTACT_FORM_NAME,
  onSubmit: (_values, dispatch) => dispatch(showModal())
})(ContactForm);

export default ContactForm;
