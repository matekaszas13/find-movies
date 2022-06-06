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

const Movies = ({ data, loading }) => {
  const [wikipediaPage, setWikipediaPage] = useState({});

  const wikipediaDetails = async (title) => {
    return await GetWikipediaDatasByTitle(title);
  };

  console.log(wikipediaPage?.[0]);

  // const htmlParser = parse(
  //   `<span class="searchmatch">Captain</span> <span class="searchmatch">America</span>: <span class="searchmatch">The</span> <span class="searchmatch">Winter</span> <span class="searchmatch">Soldier</span> is a 2014 <span class="searchmatch">American</span> superhero film based on <span class="searchmatch">the</span> Marvel Comics character <span class="searchmatch">Captain</span> <span class="searchmatch">America</span>, produced by Marvel Studios`
  // );

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
              <Button
                onClick={() =>
                  wikipediaDetails(movie.name).then((data) => {
                    setWikipediaPage(
                      data.query.search.filter(
                        (obj) => obj.title.replace(/[-–]/g, "") === movie.name.replace(/[-–]/g, "")
                      )
                    );
                  })
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
