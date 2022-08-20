import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useDispatch } from "react-redux";
import { initialize } from "../User/slices/userSlice";

import theme from "./theme";
import Helmet from "./components/Helmet";

// Dashboard
import Admin from "./views/Admin";
import Shipment from "../Shipment";
// User
import Profile from "../User/views/Profile";
import Login from "../User/views/Login";
// Global
import NotFound from "../NotFound";
import FeedBack from "../FeedBack";

function App() {
  const dispatch = useDispatch();
  dispatch(initialize());

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Helmet />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Admin />}>
            <Route index element={<Shipment />} />
            <Route path="shipment/*" element={<Shipment />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="/main/*" element={<Main />} /> // <-- allow sub-route matches */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <FeedBack />
    </ThemeProvider>
  );
}

export default App;
