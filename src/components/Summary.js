import React, { Fragment } from "react";
import H2 from "./H2";
import H3 from "./H3";
import Row from "./Row";
import Column from "./Column";
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
    emailOptOut,
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
      <Row>
        <Column flexValue={0.5}>
          <FieldSummary label={LABELS.CONTACT_OWNER} value={contactOwner} />
        </Column>
      </Row>
      <Row>
        <Column>
          <FieldSummary label={LABELS.FIRST_NAME} value={firstName} />
        </Column>
        <Column>
          <FieldSummary label={LABELS.LAST_NAME} value={lastName} />
        </Column>
      </Row>

      <Row>
        <Column>
          <FieldSummary label={LABELS.ACCOUNT_NAME} value={accountName} />
        </Column>
        <Column>
          <FieldSummary label={LABELS.COMPANY_NAME} value={companyName} />
        </Column>
      </Row>

      <Row>
        <Column>
          <FieldSummary label={LABELS.PHONE} value={phone} />
        </Column>
        <Column>
          <FieldSummary label={LABELS.FAX} value={fax} />
        </Column>
      </Row>
      <Row>
        <Column>
          <FieldSummary label={LABELS.TITLE} value={title} />
        </Column>
        <Column>
          <FieldSummary label={LABELS.EMAIL} value={email} />
        </Column>
      </Row>
      <Row>
        <Column flexValue={0.5}>
          <FieldSummary
            label={LABELS.EMAIL_OPT_OUT}
            value={emailOptOut && "Opted out"}
          />
        </Column>
      </Row>
      <H3>{HEADINGS.ADDRESS}</H3>
      <Row>
        <Column>
          <FieldSummary label={LABELS.STREET_ADDRESS} value={streetAddress} />
        </Column>
        <Column>
          <FieldSummary label={LABELS.CITY} value={city} />
        </Column>
      </Row>
      <Row>
        <Column>
          <FieldSummary label={LABELS.STATE} value={state} />
        </Column>
        <Column>
          <FieldSummary label={LABELS.POSTCODE} value={postcode} />
        </Column>
      </Row>
      <H3>{HEADINGS.DESCRIPTION}</H3>
      <Row>
        <Column flexValue={0.5}>
          <FieldSummary label={LABELS.DESCRIPTION} value={description} />
        </Column>
      </Row>
    </Fragment>
  );
};

export default Summary;
