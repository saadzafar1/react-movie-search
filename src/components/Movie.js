import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://critics.io/img/movies/poster-placeholder.png';

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className='movie'>
      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2>{movie.Title}</h2>
        <div>
          <img alt={`The movie titled: ${movie.Title}`} src={poster} />
        </div>
        <p>({movie.Year})</p>
      </a>
    </div>
  );
};

export default Movie;
