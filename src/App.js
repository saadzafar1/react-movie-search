import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import Loader from './components/Loader';
import './App.css';

const MOVIE_API_URL = 'http://www.omdbapi.com/?apikey=c88eaf2b';
const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(`${MOVIE_API_URL}&s=man`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovies([...data.Search]);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`${MOVIE_API_URL}&s=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLoading(false);
        if (data.Response === 'True') {
          setMovies([...data.Search]);
        } else {
          setErrorMessage(data.Error);
        }
      });
  };
  const content =
    loading && !errorMessage ? (
      <Loader />
    ) : errorMessage ? (
      <div className='errorMessage'>{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className='App'>
      <Header text='MOVIE SEARCH' />
      <Search onSearch={search} />
      <p className='App-intro'>Sharing a few of our favourite movies</p>
      <div className='movies'>{content}</div>
    </div>
  );
};

export default App;
