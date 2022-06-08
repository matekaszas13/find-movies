import {
  Button,
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GetImdbLinkFromWikipediaPageText from "../../apis/GetImdbLinkFromWikipediaPageText";

const Popup = ({ handleClose, open, title, description, wikipediaPageId }) => {
  console.log(title);

  const [imdbLink, setImdbLink] = useState();

  useEffect(() => {
    const fetchImdbLink = async () => {
      return await GetImdbLinkFromWikipediaPageText(
        `https://en.wikipedia.org/w/api.php?action=parse&prop=text&origin=*&formatversion=2&format=json&page=${title}`
      );
    };
    fetchImdbLink().then((data) => {
      setImdbLink(data)
    });
  }, [title]);

  return (
    <div>
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

              <Button>
                <a href={imdbLink} target="_blank" rel="noopener noreferrer">
                  IMDB
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
