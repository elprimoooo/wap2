import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateDavid, getDavidById } from "../../models/David";

export default function DavidUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [david, setDavid] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDavidById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDavid(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const david = await updateDavid(id, formData);
    if (david.status === 200) {
      redirectToSuccessPage(david.payload._id);
    } else {
      setInfo(david.msg);
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
    return navigate(`/david/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>David not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading david...</p>
      </>
    )
  }

  return (
    <>
      <h1>David update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={david.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="iq"
          placeholder="Enter number of iq"
          defaultValue={david.iq}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="vek"
          placeholder="Enter vek"
          defaultValue={david.vek}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update david</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
