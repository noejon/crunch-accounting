import React, { Fragment } from "react";
import H2 from "./H2";
import H3 from "./H3";
import FieldSummary from "./FieldSummary";
import { LABELS, HEADINGS } from "../utils/constants";

const Summary = ({
  contactReview: {
    accountName,
    city,
    companyName,
    contactOwner,
    description,
    email,
    fax,
    firstName,
    lastName,
    phone,
    postcode,
    state,
    streetAddress,
    title
  }
}) => {
  return (
    <Fragment>
      <H2>Saved</H2>
      <p>The contact details have been saved</p>
      <H3>{HEADINGS.CONTACT}</H3>
      <FieldSummary label={LABELS.CONTACT_OWNER} value={contactOwner} />
      <FieldSummary label={LABELS.FIRST_NAME} value={firstName} />
      <FieldSummary label={LABELS.LAST_NAME} value={lastName} />
      <FieldSummary label={LABELS.ACCOUNT_NAME} value={accountName} />
      <FieldSummary label={LABELS.COMPANY_NAME} value={companyName} />
      <FieldSummary label={LABELS.PHONE} value={phone} />
      <FieldSummary label={LABELS.FAX} value={fax} />
      <FieldSummary label={LABELS.TITLE} value={title} />
      <FieldSummary label={LABELS.EMAIL} value={email} />
      <H3>{HEADINGS.ADDRESS}</H3>
      <FieldSummary label={LABELS.STREET_ADDRESS} value={streetAddress} />
      <FieldSummary label={LABELS.CITY} value={city} />
      <FieldSummary label={LABELS.STATE} value={state} />
      <FieldSummary label={LABELS.POSTCODE} value={postcode} />
      <H3>{HEADINGS.DESCRIPTION}</H3>
      <FieldSummary label={LABELS.DESCRIPTION} value={description} />
    </Fragment>
  );
};

export default Summary;
