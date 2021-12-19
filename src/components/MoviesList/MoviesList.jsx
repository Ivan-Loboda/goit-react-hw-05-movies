import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

function MoviesList({ movies }) {
    const location = useLocation();

    return (
        <ul>
            {movies &&
                movies.map(movie => (
                    <li key={movie.id}>
                        <NavLink
                            to={{
                                pathname: `/movies/${movie.id}`,
                                state: { from: location }
                            }}
                            className={s.link}
                            activeClassName={s.link_active}
                        >
                            {movie.title}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};

export default MoviesList;

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    ),
};