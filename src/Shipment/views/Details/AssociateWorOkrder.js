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

function AssociateWorOkrder({ data }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { productionOrders, cartonOrders, quantity, createUser } = data;
  const { destination, status, uploadStatus, createDate } = data;


  return (
    <List
      className={classes.root}
      subheader={<ListSubheader>相关工单</ListSubheader>}
    >
      <ListItem disableGutters>
        <ListItemButton>
          <ListItemText primary={"包装工单"} />
          <ListItemText
            sx={{ textAlign: "right" }}
            secondary={cartonOrders && cartonOrders.length}
          />
          <ChevronRightIcon color="disabled" />
        </ListItemButton>
      </ListItem>
      <ListItem disableGutters>
        <ListItemButton>
          <ListItemText primary={"组装工单"} />
          <ListItemText
            sx={{ textAlign: "right" }}
            secondary={ productionOrders && productionOrders.length}
          />
          <ChevronRightIcon color="disabled" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
AssociateWorOkrder.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AssociateWorOkrder;
