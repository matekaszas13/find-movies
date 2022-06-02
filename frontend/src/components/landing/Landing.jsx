import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GetMovieByTitle from "../../apis/GetMovieByTitle";

const Landing = () => {
  const [title, setTitle] = useState("fight club");

  // const { error, loading, data } = TopRatedMovies();

  const { error, loading, data } = GetMovieByTitle(title);

  console.log(data);

  return (
    <div className="">
      <Typography variant="h5">Search your Movie</Typography>
      <TextField
        id="movie-title-input"
        label="Movie Title Goes Here"
        variant="filled"
      />
      <Button variant="contained">Search</Button>
      <div id="cards">
        {loading && "loading"}
        {data?.searchMovies?.map?.((movie) => (
          <Card key={movie.id} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {movie.name}
              </Typography>
              {movie.genres.length > 0 ? (
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {movie?.genres?.[0]?.name}
                </Typography>
              ) : null}

              <Typography variant="body2">{movie.score}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Landing;
