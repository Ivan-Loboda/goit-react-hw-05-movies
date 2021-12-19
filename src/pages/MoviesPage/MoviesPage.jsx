import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import * as moviesAPI from '../../services/api';
import Section from '../../components/Section';
import SearchMovie from '../../components/SearchMovie';
import MoviesList from '../../components/MoviesList';

function MoviesPage() {
    const [movies, setMovies] = useState(null);

    const location = useLocation();
    const parsedQueryString = queryString.parse(location.search);
    const query = parsedQueryString.query;

    useEffect(() => {
        if (query) {
            moviesAPI
                .fetchMovies(query)
                .then(({ results }) => setMovies(results))
                .catch(error => console.log(error));
        }

    }, [query]);

    useEffect(() => {
        if (location.search === '') {
            setMovies([]);
        }
    }, [location]);

    return (
        <Section>
            <SearchMovie />

            {movies && (
                <MoviesList movies={movies} />
            )}
        </Section>
    );
};

export default MoviesPage;