import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Header({ onClickBack, title }) {
  return (
    <>
      <AppBar color="primary" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={onClickBack ? onClickBack : null}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

Header.propTypes = {
  onClickBack: PropTypes.func,
  title: PropTypes.string,
};
export default Header;
