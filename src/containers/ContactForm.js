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
import { CONTACT_FORM_NAME } from "../utils/constants";
import { showModal } from "../actions";
import H3 from "../components/H3";

let ContactForm = ({ dispatch, handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <H3>Contact image</H3>

      <H3>Contact information</H3>
      <Field
        component={TextField}
        label="Contact Owner"
        name="contactOwner"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="First Name"
        name="firstName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="Last Name"
        name="lastName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="Account Name"
        name="accountName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="Company Name"
        name="companyName"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="Phone"
        name="phone"
        type="text"
        validate={[validateRequired, validatePhone]}
      />
      <Field
        component={TextField}
        label="Fax (optional)"
        name="fax"
        type="text"
      />
      <Field
        component={TextField}
        label="Title (optional)"
        name="title"
        type="text"
      />
      <Field
        component={TextField}
        label="Email"
        name="email"
        type="text"
        validate={[validateRequired, validateEmail]}
      />
      <H3>Address information</H3>
      <Field
        component={TextField}
        label="Street No. & Street"
        name="streetAddress"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="City"
        name="city"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="State"
        name="state"
        type="text"
        validate={validateRequired}
      />
      <Field
        component={TextField}
        label="Postcode"
        name="postcode"
        type="text"
        validate={[validateRequired, validatePostcode]}
      />
      <H3>Description information</H3>
      <Field
        component={TextareaField}
        label="Description"
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
