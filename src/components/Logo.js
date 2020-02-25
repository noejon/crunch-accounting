import React, { Fragment } from "react";
import styled from "styled-components";

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
`;

const Logo = () => (
  <Fragment>
    <Img src="assets/logo.png" alt="Crunch Accounting Logo" />
  </Fragment>
);

Logo.displayName = "Logo";

export default Logo;
