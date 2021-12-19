import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../../services/api';
import Section from '../../components/Section';
import MovieCard from '../../components/MovieCard';

const Cast = lazy(() =>
    import('../Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
    import('../Reviews' /* webpackChunkName: "Reviews" */),
);

function MovieDetailsPage() {
    const { path } = useRouteMatch();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        moviesAPI
            .fetchMovieById(movieId)
            .then(setMovie)
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <Section>
            {movie && (
                <MovieCard movie={movie} />
            )}

            <hr />

            <Suspense fallback={<h2>Loading in movie card...</h2>}>
                <Switch>

                    <Route exact path={`${path}/cast`}>
                        <Cast />
                    </Route>

                    <Route exact path={`${path}/reviews`}>
                        <Reviews />
                    </Route>

                </Switch>
            </Suspense>

        </Section>
    );
};

export default MovieDetailsPage;