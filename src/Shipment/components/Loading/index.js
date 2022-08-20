import React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
function Loading() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <CircularProgress
        size={25}
        thickness={5}
        sx={{
          color: "#cccccc",
        }}
      />
    </Box>
  );
}

export default Loading;
