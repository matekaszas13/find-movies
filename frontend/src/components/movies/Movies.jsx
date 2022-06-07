import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import "./Movies.css";
import GetWikipediaDatasByTitle from "../../apis/GetWikipediaDatasByTitle";
import parse from "html-react-parser";
import Popup from "../popup/Popup";

const Movies = ({ data, loading }) => {
  const [wikipediaPage, setWikipediaPage] = useState({});

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setWikipediaPage({});
    setOpen(false);
  };

  const wikipediaDetails = async (title) => {
    return await GetWikipediaDatasByTitle(title);
  };

  return (
    <div id="cards">
      <Popup wikipediaPageId={wikipediaPage?.[0]?.pageid} open={open} handleClose={handleClose} title={wikipediaPage?.[0]?.title} description={ wikipediaPage?.[0] != undefined ? parse(wikipediaPage?.[0]?.snippet) : "There is no information about this movie."} />
      {loading && <CircularProgress />}
      {data?.searchMovies?.map?.((movie) => (
        <Card
          className="card"
          key={movie.id}
          sx={{ minWidth: 275, maxWidth: 275 }}
        >
          <CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  wikipediaDetails(movie.name).then((data) => {
                    setWikipediaPage(
                      data.query.search.filter(
                        (obj) =>
                          obj.title.replace(/[-–]/g, "") ===
                          movie.name.replace(/[-–]/g, "")
                      )
                    );
                  });
                  handleClickOpen();
                }
              }
                size="small"
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {movie.name}
                </Typography>
              </Button>
            </CardActions>

            {movie.genres.length > 0 ? (
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {movie?.genres?.[0]?.name}
              </Typography>
            ) : null}

            <Typography variant="body2">{movie.score}</Typography>
          </CardContent>
        </Card>
        
      ))}
    </div>
  );
};

export default Movies;
