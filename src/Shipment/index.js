import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./views/Details";
import Lists from "./views/Lists";
import OrderNumber from "./views/OrderNumber";
import DeviceLists from "./views/DeviceLists";
import DeviceDetails  from "./views/DeviceDetails";

function Shipment() {
  return (
    <Routes>
      <Route index element={<Lists />} />
      <Route path=":id" element={<Details />} />
      <Route path=":id/orderNumber" element={<OrderNumber />} />
      <Route path=":id/devices" element={<DeviceLists />} />
      <Route path=":id/devices/:sn" element={<DeviceDetails  />} />
    </Routes>
  );
}

export default Shipment;
