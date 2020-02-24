import { connect } from "react-redux";
import ContactCard from "../components/ContactCard";
import { CONTACT_FORM_NAME } from "../utils/constants";

const mapStateToProps = ({ form }) => ({
  contactCard:
    form && form[CONTACT_FORM_NAME] && form[CONTACT_FORM_NAME].values
      ? form[CONTACT_FORM_NAME].values
      : {}
});

export default connect(mapStateToProps)(ContactCard);
