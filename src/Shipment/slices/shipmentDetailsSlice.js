import { createSlice } from "@reduxjs/toolkit";
import request from "../../Common/helpers/request";
export const shipmentDetailsSlice = createSlice({
  name: "details",
  initialState: {
    loading: false,
    data: {},
  },
  reducers: {
    fetchShipmentDetailsPending: (state, { payload }) => {
      state.loading = true;
    },
    fetchShipmentDetailsSuccess: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
    },
    fetchShipmentDetailsFailed: (state, { payload }) => {
      state.loading = false;
    },
  },
});
export const {
  fetchShipmentDetailsSuccess,
  fetchShipmentDetailsPending,
  fetchShipmentDetailsFailed,
} = shipmentDetailsSlice.actions;

// 获取发货单详情
export function fetchShipmentDetails(options) {
  return async (dispatch) => {
    try {
      dispatch(fetchShipmentDetailsPending());
      const response = await request.post("shipment_order/detail", options);
      if (response.code === 0) {
        dispatch(fetchShipmentDetailsSuccess(response));
      }
    } catch (error) {
      dispatch(fetchShipmentDetailsFailed(error));
    }
  };
}

export const shipmentDetailsSelector = (state) => state.shipment.details;
export default shipmentDetailsSlice.reducer;
