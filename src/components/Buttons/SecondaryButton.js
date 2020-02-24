import React from "react";
import PropTypes from "prop-types";
import BaseButton from "./BaseButton";

const SecondaryButton = ({ children, ...otherProps }) => (
  <BaseButton color="white" textColor="orange" {...otherProps}>
    {children}
  </BaseButton>
);

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired
};

SecondaryButton.displayName = "SecondaryButton";

export default SecondaryButton;
