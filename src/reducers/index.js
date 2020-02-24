import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import modalVisibility from "./modalVisibility";

const rootReducer = combineReducers({
  form: formReducer,
  modalVisibility
});

export default rootReducer;
