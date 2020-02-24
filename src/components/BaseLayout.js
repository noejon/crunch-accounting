import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

const BaseLayout = ({ children }) => (
  <Fragment>
    <MainDiv>{children}</MainDiv>
    <GlobalStyle />
  </Fragment>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
};

BaseLayout.displayName = "BaseLayout";

export default BaseLayout;
