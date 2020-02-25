import styled from "styled-components";

const StickyDiv = styled.div`
  z-index: 99;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #ffffff;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
`;

StickyDiv.displayName = "StickyDiv";

export default StickyDiv;
