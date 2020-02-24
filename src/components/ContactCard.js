import React from "react";
import FieldSummary from "./FieldSummary";
import H3 from "./H3";
import { LABELS } from "../utils/constants";

const ContactCard = ({
  contactCard: {
    accountName,
    city,
    companyName,
    contactOwner,
    description,
    email,
    firstName,
    lastName,
    phone,
    postcode,
    state,
    streetAddress
  }
}) => (
  <div>
    <H3>
      {firstName} {lastName}
    </H3>
    <FieldSummary label={LABELS.CONTACT_OWNER} value={contactOwner} />
    <FieldSummary label={LABELS.ACCOUNT_NAME} value={accountName} />
    <FieldSummary label={LABELS.COMPANY_NAME} value={companyName} />
    <FieldSummary label={LABELS.PHONE} value={phone} />
    <FieldSummary label={LABELS.EMAIL} value={email} />
    <FieldSummary
      label={LABELS.ADDRESS}
      value={
        streetAddress &&
        city &&
        state &&
        postcode &&
        `${streetAddress},${city}, ${state}, ${postcode}`
      }
    />
    <FieldSummary label={LABELS.DESCRIPTION} value={description} />
  </div>
);

export default ContactCard;
