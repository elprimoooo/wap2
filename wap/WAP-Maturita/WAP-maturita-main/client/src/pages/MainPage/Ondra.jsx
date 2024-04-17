import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function OndraPage() {
  return (
    <>
      <Link to="/createondra">
        <p>Ondra create form</p>
      </Link>
      <Link to="/updateondra/df46g65df4g6df">
        <p>Ondra update form</p>
      </Link>
      <Link to="/ondras">
        <p>Ondra list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
