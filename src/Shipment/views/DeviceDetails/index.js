import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, AppBar, Toolbar, Button, Box } from "@mui/material";
import { Typography, Menu, MenuItem, IconButton } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  shipmentDevicesSelector,
  removeDevices,
} from "../../slices/shipmentDevicesSlice";
import _ from "lodash";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ConfirmationDialog from "../../../Common/components/ConfirmationDialog";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  list: {
    "& .MuiListItemText-secondary": {
      textAlign: "right",
    },
  },
});

function DeviceDetails() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, idDeviceDeleted } = useSelector(shipmentDevicesSelector);
  const params = useParams();

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const sn = params.sn;
  const orderID = params.id;

  const device = _.find(data, function (o) {
    return o.sn === String(sn);
  });

  const handleDelete = () => {
    setConfirmDialogOpen(true);
  };

  const handleConfirmationDialogClose = (val) => {
    if (val === "CANCEL") {
      setConfirmDialogOpen(false);
    }
    if (val === "OK") {
      dispatch(removeDevices({ id: orderID, devices: [id] }));
    }
  };

  useEffect(() => {
    if (idDeviceDeleted) {
      setConfirmDialogOpen(false);
      navigate(-1);
    }
  }, [idDeviceDeleted]);

  if (!device) {
    return null;
  }

  const { id, productionOrder, cartonOrder, workStation } = device;
  const { uuid, mac, outerCtnIndex, palletIndex } = device;

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar color="primary" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            {sn}
          </Typography>
          {/*产品-操作菜单 */}
          <Box sx={{ mr: -1 }}>
            <Button color="inherit" onClick={handleDelete}>
              删除
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* 产品- 信息列表 */}
      <List className={classes.list}>
        <ListItem disableGutters>
          <ListItemButton>
            <ListItemText primary={"SN"} />
            <ListItemText secondary={sn} />
          </ListItemButton>
        </ListItem>
      </List>

      <ConfirmationDialog
        id="confirm-dialog"
        open={confirmDialogOpen}
        onClose={handleConfirmationDialogClose}
        options={{
          title: "删除产品",
          description: `是否继续从列表中删除产品${sn}?`,
        }}
      />
    </Container>
  );
}

export default DeviceDetails;
