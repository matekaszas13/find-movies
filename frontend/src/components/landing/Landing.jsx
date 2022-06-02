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
import UseMoviesByTitle from "../../apis/UseMoviesByTitle";
import Movies from "./Movies";

const Landing = () => {
  const [title, setTitle] = useState("");

  const [inputValue, setInputValue] = useState("");

  const { error, loading, data } = UseMoviesByTitle(title);

  console.log(data);

  return (
    <div className="">
      <Typography variant="h5">Search your Movie</Typography>
      <TextField
        id="movie-title-input"
        label="Movie Title Goes Here"
        variant="filled"

        onChange={e => setInputValue(e.target.value)}
      />
      <Button variant="contained" onClick={() => setTitle(inputValue)}>Search</Button>
      <Movies data={data} loading={loading}/>
    </div>
  );
};

export default Landing;
