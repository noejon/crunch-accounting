import React, { Fragment } from "react";
import H2 from "./H2";
import H3 from "./H3";

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
      <H3>Contact information</H3>
      <p>
        <span>Contact Owner</span>
        <span>{contactOwner}</span>
      </p>
      <p>
        <span>First Name</span>
        <span>{firstName}</span>
      </p>
      <p>
        <span>Last Name</span>
        <span>{lastName}</span>
      </p>
      <p>
        <span>Account Name</span>
        <span>{accountName}</span>
      </p>
      <p>
        <span>Company Name</span>
        <span>{companyName}</span>
      </p>
      <p>
        <span>Phone</span>
        <span>{phone}</span>
      </p>
      <p>
        <span>Fax</span>
        <span>{fax}</span>
      </p>
      <p>
        <span>Title</span>
        <span>{title}</span>
      </p>
      <p>
        <span>Street No. & Address</span>
        <span>{streetAddress}</span>
      </p>
      <p>
        <span>City</span>
        <span>{city}</span>
      </p>
      <p>
        <span>State</span>
        <span>{state}</span>
      </p>
      <p>
        <span>Description</span>
        <span>{description}</span>
      </p>
    </Fragment>
  );
};

export default Summary;
