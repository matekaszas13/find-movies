import { useQuery, gql } from "@apollo/client";

const GET_TOPRATED_MOVIES = gql`
  query {
    topRatedMovies {
      id
      name
      score
      genres {
        id
        name
      }
    }
  }
`;

const TopRatedMovies = () => {
  const { error, data, loading } = useQuery(GET_TOPRATED_MOVIES);

  return { error, data, loading };
};

export default TopRatedMovies;
