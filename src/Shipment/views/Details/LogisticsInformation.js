import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import { ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiListSubheader-root": {
      height: 34,
    },
    "& .MuiListItemText-secondary": {
      textAlign: "right",
    },
  },
});

function LogisticsInformation({ data }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { productionOrders, cartonOrders, quantity, createUser } = data;
  const { destination, status, uploadStatus, createDate } = data;

  return (
    <List
      className={classes.root}
      subheader={<ListSubheader>物流信息</ListSubheader>}
    >
      <ListItem disableGutters>
        <ListItemButton>
          <ListItemText primary={"目的地"} />
          <ListItemText sx={{ textAlign: "right" }} secondary={destination} />
          {/* <ChevronRightIcon color="disabled" /> */}
        </ListItemButton>
      </ListItem>
      <ListItem disableGutters>
        <ListItemButton>
          <ListItemText primary={"发货状态"} />
          <ListItemText
            sx={{ textAlign: "right" }}
            secondary={status && status["title"]}
          />
          {/* <ChevronRightIcon color="disabled" /> */}
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default LogisticsInformation;
