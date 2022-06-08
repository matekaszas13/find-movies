import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import UseMoviesByTitle from "../../apis/UseMoviesByTitle";
import Movies from "../movies/Movies";
import "./Landing.css";

const Landing = () => {
  const [title, setTitle] = useState("");

  const [inputValue, setInputValue] = useState("");

  const { error, loading, data } = UseMoviesByTitle(title);

  return (
    <div>
      <div className="landing">
        <Typography
          sx={{ fontSize: 32 }}
          color="text.first"
          gutterBottom
          className="greeting"
          variant="h1"
        >
          Search your Movie
        </Typography>
        <div className="input-box">
          <div className="movie-input">
            <TextField
              id="movie-title-input"
              label="Movie Title Goes Here"
              variant="filled"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <Button variant="contained" onClick={() => setTitle(inputValue)}>
            Search
          </Button>
        </div>
      </div>

      <Movies data={data} loading={loading} error={error} />
    </div>
  );
};

export default Landing;
