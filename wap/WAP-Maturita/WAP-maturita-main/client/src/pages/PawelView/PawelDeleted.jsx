import { Link, useParams } from "react-router-dom";

export default function PawelDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your pawel {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
