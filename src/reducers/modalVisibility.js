import actionTypes from "../actions/actionTypes";

const initialState = {
  showModal: false
};

const modalVisibility = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      console.log("should show modal");
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
