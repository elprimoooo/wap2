import { useParams, Link } from "react-router-dom";

export default function CreatedPawel() {
  const { id } = useParams();

  return (
    <>
      <p>Pawel was created: {id}</p>
      <Link to={`/pawel/${id}`}>
        <p>View pawel</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
