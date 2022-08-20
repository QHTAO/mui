import React from "react";
import { CssBaseline } from "@mui/material";
import { Helmet as ReactHelmet } from "react-helmet";

function Helmet() {
  return (
    <>
      <ReactHelmet>
        <title> {process.env.REACT_APP_PAGE_TITLE} </title>
      </ReactHelmet>
      <CssBaseline />
    </>
  );
}

export default Helmet;
