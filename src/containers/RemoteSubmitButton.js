import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { CONTACT_FORM_NAME } from "../utils/constants";

const RemoteSubmitButton = ({ dispatch }) => (
  <PrimaryButton onClick={() => dispatch(submit(CONTACT_FORM_NAME))}>
    Save
  </PrimaryButton>
);

export default connect()(RemoteSubmitButton);
