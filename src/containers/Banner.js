import React from "react";
import styled from "styled-components";
import BannerContainer from "../components/BannerContainer";
import H2 from "../components/H2";
import RemoteSubmitButton from "./RemoteSubmitButton";
import RemoteResetButton from "./RemoteResetButton";

const ButtonsDiv = styled.div`
  right: 0;
  text-align: center;
  display: inline-block;
`;

const Banner = () => (
  <BannerContainer>
    <H2 textColor="white">Create contact</H2>
    <ButtonsDiv>
      <RemoteResetButton />
      <RemoteSubmitButton />
    </ButtonsDiv>
  </BannerContainer>
);

export default Banner;
