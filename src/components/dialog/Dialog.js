import React from "react";

import {
  Dialog as DialogMUI,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Button } from "@mui/material";

import classes from "../../styles/Dialog.module.css";

export default function Dialog({
  open = false,
  message,
  titleStyle,
  title,
  button1Click,
  button1Text,
  button2Click,
  button2Text,
}) {
  return (
    <DialogMUI
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle className={classes[titleStyle]}>{title}</DialogTitle>
      <DialogContent dividers>{message}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={button2Click} color="error">
          {button2Text}
        </Button>
        <Button onClick={button1Click} color="success">
          {button1Text}
        </Button>
      </DialogActions>
    </DialogMUI>
  );
}
