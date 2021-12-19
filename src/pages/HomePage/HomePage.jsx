import { useState, useEffect } from 'react';
import * as moviesAPI from '../../services/api';
import Section from '../../components/Section';
import MoviesList from '../../components/MoviesList';

function HomePage() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        moviesAPI
            .fetchTrending()
            .then(({ results }) => setMovies(results))
            .catch(error => console.log(error));
    }, []);

    return (
        <Section title="Trending today">
            <MoviesList movies={movies} />
        </Section>
    );
};

export default HomePage;