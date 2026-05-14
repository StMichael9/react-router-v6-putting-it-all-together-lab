import { useOutletContext, Link, useParams, Outlet } from "react-router-dom";

function DirectorCard() {
  const { directors, setDirectors } = useOutletContext();
  const { id } = useParams();
  // Used find method instead of For of loop
  const director = directors.find((d) => String(d.id) === String(id));

  if (!director) {
    return <h2>Director not found.</h2>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link to={`movies/new`}>Add New Movie</Link>
      {/* Movie compoenents should render here depending on route */}
    </div>
  );
}

export default DirectorCard;
