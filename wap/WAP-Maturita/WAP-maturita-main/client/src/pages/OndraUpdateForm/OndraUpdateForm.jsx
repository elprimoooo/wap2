import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateOndra, getOndraById } from "../../models/Ondra";

export default function OndraUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [ondra, setOndra] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getOndraById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOndra(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const ondra = await updateOndra(id, formData);
    if (ondra.status === 200) {
      redirectToSuccessPage(ondra.payload._id);
    } else {
      setInfo(ondra.msg);
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
    return navigate(`/ondra/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Ondra not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading ondra...</p>
      </>
    )
  }

  return (
    <>
      <h1>Ondra update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={ondra.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="sila"
          placeholder="Enter number of sila"
          defaultValue={ondra.sila}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rychlost"
          placeholder="Enter if rychlost"
          defaultValue={ondra.rychlost}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update ondra</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
