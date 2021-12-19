import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api';
import s from './Cast.module.css';

function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        movieAPI
            .fetchMovieCast(movieId)
            .then(({ cast }) => setCast(cast))
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <div>
            {cast?.length > 0 ? (
                <ul>
                    {cast.map(({ id, profile_path, name, character }) => {
                        return (
                            <li key={id} className={s.item}>
                                <img
                                    className={s.image}
                                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                                    alt={name}
                                />
                                <p className={s.name}>{name}</p>
                                <p className={s.name}>Character: {character}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>'We don`t have any Cast info for this movie.'</p>
            )}
        </div>
    );
};

export default Cast;