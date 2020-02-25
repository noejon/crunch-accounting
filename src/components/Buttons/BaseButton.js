import PropTypes from "prop-types";
import styled from "styled-components";

const BaseButton = styled.button`
  background: ${props => props["color"]};
  border: none;
  box-sizing: border-box;
  color: ${props => props["textColor"]};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  padding: 6px 6px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  min-width: 121px;
  max-height: 32px;
  margin: 4px;
`;

BaseButton.propTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

BaseButton.displayName = "BaseButton";

export default BaseButton;
