import { gql, useQuery } from "@apollo/client";

const GET_TOPRATED_MOVIES = gql`
    query GetMovieByTitle($title: String!) {
        searchMovies(query: $title) {
            id
            name
            score
            genres{
                id
                name
            }
        }
    }
`;

const GetMovieByTitle = (title) => {
    const { error, data, loading } = useQuery(GET_TOPRATED_MOVIES, {
        variables: {
            title
        }
    });

    return { error, data, loading };
}

export default GetMovieByTitle