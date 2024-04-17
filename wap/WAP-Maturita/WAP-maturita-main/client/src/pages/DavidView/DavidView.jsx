import { Link, useParams, useNavigate } from "react-router-dom";
import { getDavidById, deleteDavid } from "../../models/David";
import { useEffect, useState } from "react";
import "./DavidView.css"

export default function DavidView() {
  const { id } = useParams();
  const [david, setDavid] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDavidById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDavid(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === david.name) {
      const result = await deleteDavid(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong david name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deleteddavid/${id}`);
  }


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
      <h1>David view</h1>
      <p className="davidP">David id: {id}</p>
      <p>David name: {david.name}</p>
      <p>David iq: {david.iq}</p>
      <p>David vek: {david.vek}</p>
      <form>
        <p>Napište jméno Davida pro smazání Davida</p>
        <input type="text" placeholder={david.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete david</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatedavid/${id}`}>
        <p>Update david</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
