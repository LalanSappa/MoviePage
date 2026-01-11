import axios from "axios";
import { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://690f552045e65ab24ac350f7.mockapi.io/api/v1/movie"
        );
        setMovies(response.data);
      } catch (error) {
        console.log("Error in fetching movies", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 id="title">Welcome to the Movie Page</h1>

      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h2>{movie.movieName}</h2>
            <p><strong>Duration:</strong> {movie.duration}</p>
            <p><strong>Genre:</strong> {movie.genres}</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
