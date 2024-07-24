import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([
    { title: 'Equalizer', 
      description: 'Action thriller', 
      posterURL: process.env.PUBLIC_URL + "/Equalizer.jpeg", 
      rating: 8.8 },

    { title: 'Vikings', 
      description: 'A Tv series', 
      posterURL: process.env.PUBLIC_URL + "/Vikings.jpeg", 
      rating: 8.6 },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) && movie.rating >= ratingFilter);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>MY FAVORITE MOVIES</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <MovieList movies={filteredMovies} />
      <div className='New'>
        <h2>Add a New Movie</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newMovie = {
            title: e.target.title.value,
            description: e.target.description.value,
            posterURL: e.target.posterURL.value,
            rating: e.target.rating.value,
          };
          addMovie(newMovie);
          e.target.reset();
        }} >
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="posterURL" placeholder="Poster URL" required />
          <input type="number" name="rating" placeholder="Rating" required min="0" max="10" />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default App;
