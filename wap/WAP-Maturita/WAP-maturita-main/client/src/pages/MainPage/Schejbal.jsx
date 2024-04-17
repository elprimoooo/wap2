import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SchejbalPage() {
  return (
    <>
      <Link to="/createschejbal">
        <p>Schejbal create form</p>
      </Link>
      <Link to="/updateschejbal/df46g65df4g6df">
        <p>Schejbal update form</p>
      </Link>
      <Link to="/schejbals">
        <p>Schejbal list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
