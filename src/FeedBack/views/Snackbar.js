import React from "react";
import MuiSnackbar from "@mui/material/Snackbar";

import {
  hideSnackbar,
  showSnackbar,
  snackbarSelector,
} from "../slices/snackbarSlice";
import { useDispatch, useSelector } from "react-redux";
function Snackbar() {
  const { show, text } = useSelector(snackbarSelector);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "timeout") {
      dispatch(hideSnackbar());
      return;
    }
  };
  return (
    <MuiSnackbar
      open={show}
      autoHideDuration={4000}
      onClose={handleClose}
      message={text}
    />
  );
}

export default Snackbar;
