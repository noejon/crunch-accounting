import styled from "styled-components";
import PropTypes from "prop-types";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${({ flexValue }) => flexValue};

  @media all and (max-width: 768px) {
    flex: 1;
  }
`;

Column.defaultName = "Column";

Column.propTypes = {
  flexValue: PropTypes.number
};

Column.defaultProps = {
  flexValue: 1
};

export default Column;
