import React from "react";
import styled from "styled-components";
import FieldSummary from "./FieldSummary";
import H3 from "./H3";
import { LABELS } from "../utils/constants";

const Card = styled.div`
  margin: 1em;
  padding: 2em;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
`;

Card.displayName = "Card";

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
  <Card>
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
  </Card>
);

export default ContactCard;
