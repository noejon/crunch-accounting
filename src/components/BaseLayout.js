import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f5f5f5;
    font-family: sans-serif;
  }
`;

const MainDiv = styled.div`
  margin: 0;
  padding: 0;
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
