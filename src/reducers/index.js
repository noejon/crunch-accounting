import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import contactCard from "./contactCard";
import modalVisibility from "./modalVisibility";

const rootReducer = combineReducers({
  contactCard,
  form: formReducer,
  modalVisibility
});

export default rootReducer;
