import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "./Shipment/reducer";
import userReducer from "./User/reducer";
import feedBackReducer from "./FeedBack/reducer";
export default configureStore({
  reducer: {
    shipment: shipmentReducer,
    user: userReducer,
    feedBack: feedBackReducer,
  },
});
