import { useOutletContext, Link } from "react-router-dom";

const DirectorList = () => {
  // Replace me
  const { directors, setDirectors } = useOutletContext();

  const displayDirectors = directors.map((d) => (
    <li key={d.id}>
      <Link to={d.id}>{d.name} </Link>
    </li>
  ));

  return <ul>{displayDirectors}</ul>;
};

export default DirectorList;
