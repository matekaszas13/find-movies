import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    Typography,
  } from "@mui/material";
import "./Movies.css";

const Movies = ({data, loading}) => {
  return (
    <div id="cards">
        {loading && <CircularProgress/>}
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
  )
}

export default Movies