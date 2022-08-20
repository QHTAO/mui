import { combineReducers } from "redux";
import shipmentListsReducer from "./slices/shipmentListsSlice";
import shipmentDetailsReducer from "./slices/shipmentDetailsSlice";
import shipmentDevicesReducer from "./slices/shipmentDevicesSlice";

export const shipmentSelector = (state) => state.shipment;

export default combineReducers({
  lists: shipmentListsReducer,
  details: shipmentDetailsReducer,
  devices: shipmentDevicesReducer,
});
