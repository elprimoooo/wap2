import { useParams, Link } from "react-router-dom";

export default function CreatedTelefon() {
  const { id } = useParams();

  return (
    <>
      <p>Ondra was created: {id}</p>
      <Link to={`/ondra/${id}`}>
        <p>View ondra</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
