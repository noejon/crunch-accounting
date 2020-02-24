import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SecondaryButton from "./Buttons/SecondaryButton";

const ModalContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

ModalContainer.propTypes = {
  show: PropTypes.bool
};

ModalContainer.defaultProps = {
  show: false
};

ModalContainer.displayName = "ModalContainer";

const ModalMain = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

ModalMain.displayName = "ModalMain";

const Modal = ({ children, handleClose, show }) => {
  return (
    <ModalContainer show={show}>
      <ModalMain>
        {children}
        <SecondaryButton onClick={handleClose}>Close</SecondaryButton>
      </ModalMain>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};

Modal.defaultProps = {
  show: false
};

export default Modal;
