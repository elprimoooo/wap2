import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PawelPage() {
  return (
    <>
      <Link to="/createpawel">
        <p>Pawel create form</p>
      </Link>
      <Link to="/updatepawel/df46g65df4g6df">
        <p>Pawel update form</p>
      </Link>
      <Link to="/pawels">
        <p>Pawel list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
