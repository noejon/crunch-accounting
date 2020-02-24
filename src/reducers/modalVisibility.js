import actionTypes from "../actions/actionTypes";

const initialState = {
  showModal: false
};

const modalVisibility = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        showModal: true
      };
    case actionTypes.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalVisibility;
