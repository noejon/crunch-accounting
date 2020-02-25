import React from "react";
import styled from "styled-components";
import { MdErrorOutline } from "react-icons/md";

const PositionIcon = styled.span`
  position: absolute;
  top: 6px;
  right: 4px;
`;

const ErrorIcon = () => (
  <PositionIcon>
    <MdErrorOutline fill="red" />
  </PositionIcon>
);
export default ErrorIcon;
