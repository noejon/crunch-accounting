import React from "react";
import H3 from "./H3";

const ContactCard = ({
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
}) => (
  <div>
    <H3>
      {firstName} {lastName}
    </H3>
    <div>
      <span>Contact Owner</span>
      <span>{contactOwner}</span>
    </div>
    <div>
      <span>Account Name</span>
      <span>{accountName}</span>
    </div>
    <div>
      <span>Company Name</span>
      <span>{companyName}</span>
    </div>
    <div>
      <span>Phone</span>
      <span>{phone}</span>
    </div>
    <div>
      <span>Email</span>
      <span>{email}</span>
    </div>
    <div>
      <span>Address</span>
      <span>
        {streetAddress},{city}, {state}, {postcode}
      </span>
    </div>
    <div>
      <span>Description</span>
      <span>{description}</span>
    </div>
  </div>
);

export default ContactCard;
