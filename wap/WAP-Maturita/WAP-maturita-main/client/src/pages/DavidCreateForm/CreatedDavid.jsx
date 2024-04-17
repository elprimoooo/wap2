import { useParams, Link } from "react-router-dom";

export default function CreatedDavid() {
  const { id } = useParams();

  return (
    <>
      <p>David was created: {id}</p>
      <Link to={`/david/${id}`}>
        <p>View david</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
