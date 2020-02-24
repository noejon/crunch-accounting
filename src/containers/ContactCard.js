import { connect } from "react-redux";
import ContactCard from "../components/ContactCard";

const mapStateToProps = ({ contactCard }) => contactCard;

export default connect(mapStateToProps)(ContactCard);
