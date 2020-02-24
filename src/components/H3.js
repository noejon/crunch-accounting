import styled from "styled-components";
import PropTypes from "prop-types";

const H3 = styled.h3`
  color: ${props => props["textColor"]};
`;

H3.propTypes = {
  textColor: PropTypes.string
};

H3.defaultProps = {
  textColor: "orange"
};

H3.displayName = "H3";

export default H3;
