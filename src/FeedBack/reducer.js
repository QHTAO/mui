import { combineReducers } from "redux";
import snackbarReducer from "./slices/snackbarSlice";
export default combineReducers({
  snackbar: snackbarReducer,
});
