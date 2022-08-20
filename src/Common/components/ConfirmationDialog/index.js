import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { DialogContentText, DialogActions, Button } from "@mui/material";

function ConfirmationDialog({ onClose, options, id, open }) {
  const handleCancel = () => {
    onClose && onClose("CANCEL");
  };

  const handleOk = () => {
    onClose && onClose("OK");
  };

  const { title, description } = options;
  return (
    <Dialog id={id} open={open} onClose={handleCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>取消</Button>
        <Button onClick={handleOk}>确定</Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  options: PropTypes.object,
};

export default ConfirmationDialog;
