import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DavidPage() {
  return (
    <>
      <Link to="/createdavid">
        <p>David create form</p>
      </Link>
      <Link to="/updatedavid/df46g65df4g6df">
        <p>David update form</p>
      </Link>
      <Link to="/davids">
        <p>David list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
