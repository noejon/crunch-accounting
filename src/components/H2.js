import styled from "styled-components";
import PropTypes from "prop-types";

const H2 = styled.h2`
  color: ${props => props["textColor"]};
`;

H2.propTypes = {
  textColor: PropTypes.string
};

H2.defaultProps = {
  textColor: "black"
};

H2.displayName = "H2";

export default H2;
