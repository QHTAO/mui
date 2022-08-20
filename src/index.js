import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import request from "./Common/helpers/request";
import { showSnackbar } from "./FeedBack/slices/snackbarSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
/* Error: timeout */
request.interceptors.response.use(
  (response) => response,
  (error) => {
    store.dispatch(showSnackbar({ text: error.toString() }));
    return Promise.reject(error);
  }
);
