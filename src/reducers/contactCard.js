import actionTypes from "../actions/actionTypes";

const initialState = {
  accountName: "",
  city: "",
  companyName: "",
  contactOwner: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  postcode: "",
  state: "",
  streetAddress: ""
};

const contactCard = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POPULATE_CONTACT_CARD:
      return {
        ...state,
        ...action.contactChange
      };
    case actionTypes.RESET_CONTACT_CARD:
      return initialState;
    default:
      return state;
  }
};

export default contactCard;
