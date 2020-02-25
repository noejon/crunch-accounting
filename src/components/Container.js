import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: none;
  padding: 0 4rem;
  @media all and (max-width: 768px) {
    .navigation {
      justify-content: space-around;
    }
  }

  @media all and (max-width: 500px) {
    .navigation {
      flex-direction: column;
    }
  }
`;

export default Container;

export const HalfContainer = styled.div`
  flex: 1 1 0;
`;
