import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateSchejbal, getSchejbalById } from "../../models/Schejbal";

export default function SchejbalUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [schejbal, setSchejbal] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSchejbalById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSchejbal(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const schejbal = await updateSchejbal(id, formData);
    if (schejbal.status === 200) {
      redirectToSuccessPage(schejbal.payload._id);
    } else {
      setInfo(schejbal.msg);
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
    return navigate(`/schejbal/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Schejbal not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading schejbal...</p>
      </>
    )
  }

  return (
    <>
      <h1>Schejbal update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={schejbal.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="ucitel"
          placeholder="Enter zda je tam ucitel"
          defaultValue={schejbal.ucitel}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="ucitel"
          placeholder="Enter zda-li tam je ucitel"
          defaultValue={schejbal.ucitel}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update schejbal</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
