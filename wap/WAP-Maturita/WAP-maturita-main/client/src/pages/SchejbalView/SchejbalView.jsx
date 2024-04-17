import { Link, useParams, useNavigate } from "react-router-dom";
import { getSchejbalById, deleteSchejbal } from "../../models/Schejbal";
import { useEffect, useState } from "react";
import "./SchejbalView.css"

export default function SchejbalView() {
  const { id } = useParams();
  const [schejbal, setSchejbal] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSchejbalById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSchejbal(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === schejbal.name) {
      const result = await deleteSchejbal(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong schejbal name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedschejbal/${id}`);
  }


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
      <h1>Schejbal view</h1>
      <p className="schejbalP">Schejbal id: {id}</p>
      <p>Schejbal name: {schejbal.name}</p>
      <p>Schejbal pohlavi: {schejbal.pohlavi}</p>
      <p>Schejbal ucitel: {schejbal.ucitel}</p>
      <form>
        <p>Napište jméno Schejbala pro smazání Schejbala</p>
        <input type="text" placeholder={schejbal.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete schejbal</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateschejbal/${id}`}>
        <p>Update schejbal</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
