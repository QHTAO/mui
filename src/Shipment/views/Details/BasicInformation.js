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

function BasicInformation({ data }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { orderNumber, customer, quantity, createUser } = data;
  const { destination, status, uploadStatus, createDate } = data;
  return (
    <List
      className={classes.root}
      subheader={<ListSubheader>基础信息</ListSubheader>}
    >
      <ListItem disableGutters>
        <ListItemButton>
          <ListItemText primary={"客户名称"} />
          <ListItemText secondary={customer && customer["name"]} />
        </ListItemButton>
      </ListItem>
      <ListItem disableGutters>
        <ListItemButton
          component={Link}
          to={{
            pathname: `${pathname}/orderNumber`,
            search: `?val=${orderNumber}`,
          }}
        >
          <ListItemText primary={"工单号"} />
          <ListItemText secondary={orderNumber} />
          <ChevronRightIcon color="disabled" />
        </ListItemButton>
      </ListItem>
      <ListItem disableGutters>
        <ListItemButton
          component={Link}
          to={{
            pathname: `${pathname}/quantity`,
            search: `?val=${quantity}`,
          }}
        >
          <ListItemText primary={"发货数量"} />
          <ListItemText secondary={quantity} />
          <ChevronRightIcon color="disabled" />
        </ListItemButton>
      </ListItem>

      <ListItem disableGutters>
        <ListItemButton component={Link} to={`${pathname}/devices`}>
          <ListItemText primary={"产品列表"} />
          <ChevronRightIcon color="disabled" />
        </ListItemButton>
      </ListItem>

      <ListItem disableGutters>
        <ListItemButton>
          <ListItemText primary={"创建时间"} />
          <ListItemText secondary={createDate} />
        </ListItemButton>
      </ListItem>
      <ListItem disableGutters>
        <ListItemButton>
          <ListItemText primary={"所有者"} />
          <ListItemText secondary={createUser && createUser["name"]} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

BasicInformation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BasicInformation;
