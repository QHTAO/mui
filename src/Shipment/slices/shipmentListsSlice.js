import { createSlice } from "@reduxjs/toolkit";
import request from "../../Common/helpers/request";
export const shipmentListsSlice = createSlice({
  name: "lists",
  initialState: {
    pageNum: 1,
    totalPage: 0,
    data: [],
  },
  reducers: {
    fetchShipmentListsSuccess: (state, { payload }) => {
      state.totalPage = payload.totalPage;
      state.data = payload.data;
    },
    fetchNextShipmentListsSuccess: (state, { payload }) => {
      state.pageNum = state.pageNum + 1;
      state.totalPage = payload.totalPage;
      state.data =  state.data.concat(payload.data);
    },
  },
});
export const { fetchShipmentListsSuccess, fetchNextShipmentListsSuccess } =
  shipmentListsSlice.actions;

// 获取发货单列表
export function fetchShipmentLists(options) {
  return async (dispatch) => {
    try {
      const response = await request.post("shipment_order/search", options);
      if (response.code === 0) {
        dispatch(fetchShipmentListsSuccess(response));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
// 获取下一页的发货单列表
export function fetchNextShipmentLists(options) {
  return async (dispatch) => {
    try {
      const response = await request.post("shipment_order/search", options);
      if (response.code === 0) {
        dispatch(fetchNextShipmentListsSuccess(response));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const shipmentListsSelector = (state) => state.shipment.lists;
export default shipmentListsSlice.reducer;
