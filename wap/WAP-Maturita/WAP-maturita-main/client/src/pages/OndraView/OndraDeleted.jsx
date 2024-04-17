import { Link, useParams } from "react-router-dom";

export default function OndraDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your ondra {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
