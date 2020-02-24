import React from "react";
import { connect } from "react-redux";
import Summary from "../components/Summary";
import Modal from "../components/Modal";
import { hideModal } from "../actions";
import { CONTACT_FORM_NAME } from "../utils/constants";

const mapStateToProps = ({ form, modalVisibility }) => ({
  contactReview:
    form && form[CONTACT_FORM_NAME] && form[CONTACT_FORM_NAME].values
      ? form[CONTACT_FORM_NAME].values
      : {},
  modalVisibility
});

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(hideModal())
});

const ModalSummary = ({
  contactReview,
  handleClose,
  modalVisibility: { showModal }
}) => (
  <Modal handleClose={handleClose} show={showModal}>
    <Summary contactReview={contactReview} />
  </Modal>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSummary);
