import React from "react";
import { connect } from "react-redux";
import Summary from "../components/Summary";
import Modal from "../components/Modal";
import { hideModal } from "../actions";

const mapStateToProps = ({ form, modalVisibility }) => ({
  form,
  modalVisibility
});

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(hideModal())
});

const ModalSummary = ({
  form,
  handleClose,
  modalVisibility: { showModal }
}) => (
  <Modal handleClose={handleClose} show={showModal}>
    <Summary form={form} />
  </Modal>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSummary);
