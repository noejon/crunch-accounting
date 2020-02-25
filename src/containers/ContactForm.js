import React from "react";
import styled from "styled-components";
import { Field, formValueSelector, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import validateEmail from "../utils/validators/validateEmailAddress";
import validateRequired from "../utils/validators/validateRequired";
import validatePostcode from "../utils/validators/validatePostcode";
import validatePhone from "../utils/validators/validatePhoneNumber";
import validateContact from "../utils/validators/validateContact";
import validateAddress from "../utils/validators/validateAddress";
import TextField from "../components/Fields/TextField";
import CheckboxField from "../components/Fields/CheckboxField";
import TextareaField from "../components/Fields/TextareaField";
import { CONTACT_FORM_NAME, HEADINGS, LABELS } from "../utils/constants";
import { showModal } from "../actions";
import H3 from "../components/H3";
import Column from "../components/Column";
import Row from "../components/Row";

const ToggleDiv = styled.div`
  ${({ show }) => !show && "display: none"}
`;

ToggleDiv.displayName = "ToggleDiv";

ToggleDiv.propTypes = {
  show: PropTypes.bool
};

ToggleDiv.defaultProps = {
  show: false
};

let ContactForm = ({ handleSubmit, formValues }) => {
  return (
    <form onSubmit={handleSubmit}>
      <H3>{HEADINGS.IMAGE}</H3>

      <H3>{HEADINGS.CONTACT}</H3>
      <Row>
        <Column flexValue={0.5}>
          <Field
            component={TextField}
            label={LABELS.CONTACT_OWNER}
            name="contactOwner"
            type="text"
            validate={validateRequired}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Field
            component={TextField}
            label={LABELS.FIRST_NAME}
            name="firstName"
            type="text"
            validate={validateRequired}
          />
        </Column>
        <Column>
          <Field
            component={TextField}
            label={LABELS.LAST_NAME}
            name="lastName"
            type="text"
            validate={validateRequired}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Field
            component={TextField}
            label={LABELS.ACCOUNT_NAME}
            name="accountName"
            type="text"
            validate={validateRequired}
          />
        </Column>
        <Column>
          <Field
            component={TextField}
            label={LABELS.COMPANY_NAME}
            name="companyName"
            type="text"
            validate={validateRequired}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Field
            component={TextField}
            label={LABELS.PHONE}
            name="phone"
            type="text"
            validate={[validateRequired, validatePhone]}
          />
        </Column>
        <Column>
          <Field
            component={TextField}
            label={`${LABELS.FAX}${LABELS.OPTIONAL}`}
            name="fax"
            type="text"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Field
            component={TextField}
            label={LABELS.EMAIL}
            name="email"
            type="text"
            validate={[validateRequired, validateEmail]}
          />
        </Column>
        <Column>
          <Field
            component={TextField}
            label={`${LABELS.TITLE}${LABELS.OPTIONAL}`}
            name="title"
            type="text"
          />
        </Column>
      </Row>
      <Row>
        <Column flexValue={0.5}>
          <Field
            component={CheckboxField}
            label={LABELS.EMAIL_OPT_OUT}
            name="emailOptOut"
            type="checkbox"
          />
        </Column>
      </Row>
      <ToggleDiv show={validateContact(formValues)}>
        <H3>{HEADINGS.ADDRESS}</H3>
        <Row>
          <Column>
            <Field
              component={TextField}
              label={LABELS.STREET_ADDRESS}
              name="streetAddress"
              type="text"
              validate={validateRequired}
            />
          </Column>
          <Column>
            <Field
              component={TextField}
              label={LABELS.CITY}
              name="city"
              type="text"
              validate={validateRequired}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Field
              component={TextField}
              label={LABELS.STATE}
              name="state"
              type="text"
              validate={validateRequired}
            />
          </Column>
          <Column>
            <Field
              component={TextField}
              label={LABELS.POSTCODE}
              name="postcode"
              type="text"
              validate={[validateRequired, validatePostcode]}
            />
          </Column>
        </Row>
      </ToggleDiv>
      <ToggleDiv
        show={validateContact(formValues) && validateAddress(formValues)}
      >
        <H3>{HEADINGS.DESCRIPTION}</H3>
        <div>
          <Field
            component={TextareaField}
            label={LABELS.DESCRIPTION}
            name="description"
            type="text"
            validate={validateRequired}
          />
        </div>
      </ToggleDiv>
    </form>
  );
};

ContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

ContactForm = connect(state => ({
  formValues: formValueSelector(CONTACT_FORM_NAME)(
    state,
    "accountName",
    "city",
    "companyName",
    "contactOwner",
    "email",
    "firstName",
    "lastName",
    "phone",
    "postcode",
    "state",
    "streetAddress"
  )
}))(ContactForm);

ContactForm = reduxForm({
  form: CONTACT_FORM_NAME,
  onSubmit: (_values, dispatch) => dispatch(showModal())
})(ContactForm);

export default ContactForm;
