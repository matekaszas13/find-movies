import React, { useState } from "react";
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

const Movies = ({ data, loading, error}) => {
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
    <div>
      <Popup
        wikipediaPageId={wikipediaPage?.[0]?.pageid}
        open={open}
        handleClose={handleClose}
        title={wikipediaPage?.[0]?.title}
        description={
          wikipediaPage?.[0] !== undefined
            ? parse(wikipediaPage?.[0]?.snippet)
            : "There is no information about this movie."
        }
      />
      <div id="cards">
        {data === undefined || data.searchMovies.length === 0 ? <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    There is no movie here...
                  </Typography> : null}
      </div>
      <div id="cards">
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
                  }}
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
              ) : (
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  There is no category
                </Typography>
              )}

              <Typography variant="body2">{movie.score}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Movies;
