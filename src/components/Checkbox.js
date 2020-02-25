import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

CheckboxContainer.displayName = "CheckboxContainer";

const Icon = styled.svg`
  fill: none;
  stroke: green;
  stroke-width: 2px;
`;

Icon.displayName = "CheckboxIcon";

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

HiddenCheckbox.displayName = "HiddenCheckbox";

const CheckboxWrapper = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: white;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px orange;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

CheckboxWrapper.displayName = "CheckboxWrapper";

CheckboxWrapper.propTypes = {
  checked: PropTypes.bool
};

CheckboxWrapper.defaultProps = {
  checked: false
};

const Checkbox = ({ checked, ...otherProps }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...otherProps} />
    <CheckboxWrapper checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </CheckboxWrapper>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false
};

export default Checkbox;
