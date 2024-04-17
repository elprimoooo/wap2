import { Link, useParams, useNavigate } from "react-router-dom";
import { getPawelById, deletePawel } from "../../models/Pawel";
import { useEffect, useState } from "react";
import "./PawelView.css"

export default function PawelView() {
  const { id } = useParams();
  const [pawel, setPawel] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPawelById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPawel(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === pawel.name) {
      const result = await deletePawel(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong pawel name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedpawel/${id}`);
  }


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
      <h1>Pawel view</h1>
      <p className="pawelP">Pawel id: {id}</p>
      <p>Pawel name: {pawel.name}</p>
      <p>Pawel nalada: {pawel.nalada}</p>
      <p>Pawel chytrost: {pawel.chytrost}</p>
      <form>
        <p>Napište jméno pawla pro smazání pawla</p>
        <input type="text" placeholder={pawel.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete pawel</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatepawel/${id}`}>
        <p>Update pawel</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
