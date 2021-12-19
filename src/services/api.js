const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5f8f89b44874dae418398127927dd3d2';

async function fetchAPI(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
    return fetchAPI(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMovies(query) {
    return fetchAPI(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&language=en-US`);
}

export function fetchMovieById(movieId) {
    return fetchAPI(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMovieCast(movieId) {
    return fetchAPI(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&page=1`);
}

export function fetchMovieReviews(movieId) {
    return fetchAPI(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`);
}