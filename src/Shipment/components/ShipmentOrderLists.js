import React from "react";
import { List, ListItem, ListItemButton } from "@mui/material";
import { ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ShipmentOrderLists({ data }) {
  return (
    <List>
      {data.map((item, index) => {
        const { id, orderNumber, customer, destination, status } = item;
        return (
          <ListItem key={item.id} disableGutters>
            <ListItemButton component={Link} to={`/shipment/${id}`}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={orderNumber}
                secondary={`${customer.name},${destination}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
ShipmentOrderLists.propTypes = {
  data: PropTypes.array.isRequired,
};
export default ShipmentOrderLists;
