import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Column from "./Column";
import Row from "./Row";

const Label = styled.div`
  font-size: 18px;
  color: gray;
  text-align: right;
  min-width: 160px;
`;

const Value = styled.div`
  position: relative;
  font-size: 16px;
  padding: 1px 15px 0 15px;
`;

const FieldSummary = ({ label, value }) => (
  <Row>
    <Column>
      <Label>{label}</Label>
    </Column>
    <Column flexValue={3}>
      <Value>{value}</Value>
    </Column>
  </Row>
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
