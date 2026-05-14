import { useOutletContext, useParams, useNavigate } from "react-router-dom";

function MovieCard() {
  const { directors, setDirectors } = useOutletContext();
  const { id, movieId } = useParams();

  const navigate = useNavigate();
  // Replace director and movie
  const director = directors.find((d) => String(d.id) === String(id));
  if (!director) return <h2>Director not found.</h2>;
  // After finding director
  const movie = director.movies.find((m) => String(m.id) === String(movieId));
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}

export default MovieCard;
