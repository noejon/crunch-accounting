import React, { Fragment } from "react";
import H2 from "./H2";
import H3 from "./H3";

const Summary = form => (
  <Fragment>
    <H2>Saved</H2>
    <p>The contact details have been saved</p>
    <H3>Contact information</H3>
    <p>
      <span>Contact Owner</span>
      <span>{form.contactOwner}</span>
    </p>
  </Fragment>
);

export default Summary;
