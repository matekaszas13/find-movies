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

const Movies = ({ data, loading }) => {
  const [wikipediaPage, setWikipediaPage] = useState({});

  const wikipediaDetails = async (title) => {
    return await GetWikipediaDatasByTitle(title);
  };

  console.log(wikipediaPage);

  return (
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
              <Button size="small">
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
