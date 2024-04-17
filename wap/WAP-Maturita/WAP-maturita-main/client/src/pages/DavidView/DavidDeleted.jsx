import { Link, useParams } from "react-router-dom";

export default function DavidDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your david {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
