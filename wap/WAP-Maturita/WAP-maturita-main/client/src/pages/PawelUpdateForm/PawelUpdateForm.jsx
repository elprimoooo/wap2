import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePawel, getPawelById } from "../../models/Pawel";

export default function PawelUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [pawel, setPawel] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPawelById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPawel(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const pawel = await updatePawel(id, formData);
    if (pawel.status === 200) {
      redirectToSuccessPage(pawel.payload._id);
    } else {
      setInfo(pawel.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/pawel/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Pawel not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading pawel...</p>
      </>
    )
  }

  return (
    <>
      <h1>Pawel update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={pawel.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="nalada"
          placeholder="Enter nalada"
          defaultValue={pawel.nalada}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="chytrost"
          placeholder="Enter chytrost"
          defaultValue={pawel.chytrost}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update pawel</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
