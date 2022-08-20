import React from "react";
import logo from "../images/loginlogo.png";
import Box from "@mui/material/Box";
function LoginHeader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mr: -3, py: 3 }}>
      <img src={logo} alt="Logo" />
    </Box>
  );
}

export default LoginHeader;
