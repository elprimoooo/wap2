import { Link, useParams, useNavigate } from "react-router-dom";
import { getOndraById, deleteOndra } from "../../models/Ondra";
import { useEffect, useState } from "react";
import "./OndraView.css"

export default function OndraView() {
  const { id } = useParams();
  const [ondra, setOndra] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getOndraById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOndra(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === ondra.name) {
      const result = await deleteOndra(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong ondra name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedondra/${id}`);
  }


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
      <h1>Ondra view</h1>
      <p className="ondraP">Ondra id: {id}</p>
      <p>Ondra name: {ondra.name}</p>
      <p>Ondra sila: {ondra.sila}</p>
      <p>Ondra rychlost: {ondra.rychlost}</p>
      <form>
        <p>Napište ondru pro smazání ondry</p>
        <input type="text" placeholder={ondra.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete ondra</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateondra/${id}`}>
        <p>Update ondra</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
