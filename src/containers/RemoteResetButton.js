import React from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { CONTACT_FORM_NAME } from "../utils/constants";

const RemoteResetButton = ({ dispatch }) => (
  <SecondaryButton onClick={() => dispatch(reset(CONTACT_FORM_NAME))}>
    Cancel
  </SecondaryButton>
);

export default connect()(RemoteResetButton);
