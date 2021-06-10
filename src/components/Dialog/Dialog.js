import React from "react";
import Button from "../Button/Button";
import MuiDialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dialog = ({ open, id, handleClose, handleDelete }) => {
  return (
    <MuiDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>Deleting Item!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this item permanently
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleDelete(id);
            handleClose();
          }}
          color="primary"
        >
          <Typography>Delete</Typography>
        </Button>
        <Button onClick={handleClose} color="primary">
          <Typography>Cancel</Typography>
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
