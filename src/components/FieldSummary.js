import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Label = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: lightgray;
`;

const Value = styled.div`
  position: relative;
  font-size: 14px;
  padding: 0 25px 1px 25px;
`;

const FieldSummary = ({ label, value }) => (
  <Fragment>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Fragment>
);

FieldSummary.displayName = "FieldSummary";

FieldSummary.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

FieldSummary.defaultProps = {
  value: ""
};

export default FieldSummary;
