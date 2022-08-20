import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../Common/helpers/request";

export const fetchDevicesLists = createAsyncThunk(
  "shipment/devices",
  async (options) => {
    return await request.post("shipment_order/devices", options);
  }
);
export const fetchNextDevicesLists = createAsyncThunk(
  "shipment/next_devices",
  async (options) => {
    return await request.post("shipment_order/devices", options);
  }
);

//删除发货工单-产品
export const removeDevices = createAsyncThunk(
  "shipment_order/remove_devices",
  async (options) => {
    return await request.post("shipment_order/remove_devices", options);
  }
);

export const shipmentDevicesSlice = createSlice({
  name: "devices",
  initialState: {
    loading: false,
    pageNum: 1,
    totalPage: 0,
    idDeviceDeleted: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    //获取产品列表
    [fetchDevicesLists.fulfilled]: (state, { payload }) => {
      state.idDeviceDeleted = false;
      state.totalPage = payload.totalPage;
      state.data = payload.data;
    },
    [fetchNextDevicesLists.fulfilled]: (state, { payload }) => {
      state.pageNum = state.pageNum + 1;
      state.totalPage = payload.totalPage;
      state.data = state.data.concat(payload.data);
    },
    //删除产品
    [removeDevices.fulfilled]: (state, { payload }) => {
      if (payload.code === 0) {
        state.idDeviceDeleted = true;
      }
    },
  },
});
export const {} = shipmentDevicesSlice.actions;
export const shipmentDevicesSelector = (state) => state.shipment.devices;
export default shipmentDevicesSlice.reducer;
