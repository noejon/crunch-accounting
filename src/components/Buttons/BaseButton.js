import PropTypes from "prop-types";
import styled from "styled-components";

const BaseButton = styled.button`
  padding: 10px 20px;
  width: 140;
  display: block;
  margin: 20px auto;
  font-size: 16px;
  background: ${props => props["color"]};
  color: ${props => props["textColor"]};
  border: 2px solid ${props => props["textColor"]};
`;

BaseButton.propTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

BaseButton.displayName = "BaseButton";

export default BaseButton;
