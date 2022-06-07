import {
  Button,
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import React from "react";

const Popup = ({ handleClose, open, title, description, wikipediaPageId }) => {
  console.log(wikipediaPageId);

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {wikipediaPageId !== undefined ? (
          <div>
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {description}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button>
                <a
                  href={` https://en.wikipedia.org/?curid=${wikipediaPageId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
              </Button>
            </DialogActions>
          </div>
        ) : (
          <div>
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {description}
              </DialogContentText>
            </DialogContent>{" "}
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Popup;
