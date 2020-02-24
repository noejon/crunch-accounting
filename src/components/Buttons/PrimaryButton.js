import React from "react";
import PropTypes from "prop-types";
import BaseButton from "./BaseButton";

const PrimaryButton = ({ children, ...otherProps }) => (
  <BaseButton color="orange" textColor="white" {...otherProps}>
    {children}
  </BaseButton>
);

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired
};

PrimaryButton.displayName = "PrimaryWrapper";

export default PrimaryButton;
