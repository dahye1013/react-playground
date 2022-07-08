import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch(process.env.REACT_APP_API_URL);

      if (!res.ok) throw new Error('Http request Error');

      const data = await res.json();
      const loadedMovies = Object.keys(data).reduce((acc, key) => {
        acc.push({ id: key, title: data[key].title, openingText: data[key].title });
        return acc;
      }, []);

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  let content = <p>Found no movies...</p>;

  if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (!isLoading && movies.length === 0) {
    content = <p>Found no movies...</p>;
  }
  if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && error) {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const addMovieHandler = async (movie) => {
    try {
      await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchMovieHandler();
    } catch (error) {
      alert('Something wrong happened');
    }
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
