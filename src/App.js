import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
// import HomePage from './pages/HomePage'
// import MoviesPage from './pages/MoviesPage'
// import MovieDetailsPage from './pages/MovieDetailsPage'
import Navigation from './components/Navigation';
// import { fetchTrending } from './services/api';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

function App() {

  return (
    <>
      <Navigation />

      <Suspense fallback={<h2>Loading...</h2>}>

        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/movies' exact>
            <MoviesPage />
          </Route>
          <Route path='/movies/:movieId'>
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />

        </Switch>

      </Suspense>
    </>
  );
}

export default App;
