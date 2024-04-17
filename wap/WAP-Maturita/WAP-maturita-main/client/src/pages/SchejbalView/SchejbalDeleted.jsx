import { Link, useParams } from "react-router-dom";

export default function SchejbalDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your schejbal {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
