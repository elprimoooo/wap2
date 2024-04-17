import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createSchejbal } from "../../models/Schejbal";

export default function SchejbalCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const schejbal = await createSchejbal(formData);
    if (schejbal.status === 201) {
      redirectToSuccessPage(schejbal.payload._id);
    } else {
      setInfo(schejbal.msg);
    }
  };
//name tady zustava
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdschejbal/${id}`);
  };

  return (
    <>
      <h1>Schejbal create form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="pohlavi"
          placeholder="Enter zda je pohlavi"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="ucitel"
          placeholder="Enter zda je  ucitel"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create schejbal</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
